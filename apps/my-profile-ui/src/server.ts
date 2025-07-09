import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import bootstrap from './main.server';
import { initialPayloadData, DataPayload, languages } from '@my-profile-ssr/shared/common-data';
import { appLanguage } from '@my-profile-ssr/core/i18n-data';


const initialData: DataPayload = {
  summary: {
    title: 'General overview',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  config: {
    background: '/bg.jpg'
  },
  profile: {
    fullName: 'Vladimir Balan',
    position: 'Front End Developer',
    avatarUrl: '/profile.jpg'
  },
  navigation: {
    routes: [
      {
        label: 'About me',
        route: 'about',
      },
      {
        label: 'AskMeAnything Chat',
        route: 'askmeanything',
      },
    ]
  },
  experience: [
    {
      employer: {
        name: 'Accesa',
        logo: '/accesa.jpg',
        period: 'November 2023 - prezent',
        position: 'Senior Frontend Developer'
      },
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      techStack: [
        {
          icon: '/react.jpg',
          label: 'react',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          icon: '/nx.jpg',
          label: 'nx',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          icon: '/angular.jpg',
          label: 'angular',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          icon: '/react.jpg',
          label: 'cartofi',
          description: 'did nothing'
        }
      ]
    },
    {
      employer: {
        name: 'Endava',
        logo: '/endava.jpg',
        period: 'March 2021 - November 2023',
        position: 'Frontend Developer'
      },
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      techStack: [
        {
          icon: '/react.jpg',
          label: 'angular',
          description: 'did nothing'
        },
        {
          icon: '/react.jpg',
          label: 'react',
          description: 'did nothing'
        },
        {
          icon: '/react.jpg',
          label: 'nx',
          description: 'did nothing'
        }
      ]
    },
    {
      employer: {
        name: 'Personal experiece',
        period: 'August 2016 - March 2021',
        position: 'Full-stack Developer'
      },
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      techStack: [
        {
          icon: '/react.jpg',
          label: 'angular 2',
          description: 'did nothing'
        },
      ]
    }
  ]
}

const extractLanguage = (req: express.Request): languages | undefined => {
  // This is a workaround to ensure that the CommonEngine is initialized with the correct language.
  const cookies = req.headers.cookie
    ? Object.fromEntries(
        req.headers.cookie.split(';').map(cookie => {
          const [name, ...rest] = cookie.trim().split('=');
          return [name, decodeURIComponent(rest.join('='))];
        })
      )
    : {};

  return cookies['lang'] as languages | undefined;
};

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/apps/my-profile-ui/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? join(distFolder, 'index.original.html')
    : join(distFolder, 'index.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: distFolder,
        providers: [
          { provide: APP_BASE_HREF, useValue: baseUrl },
          { provide: initialPayloadData, useValue: initialData },
          { provide: appLanguage, useValue: extractLanguage(req) ?? 'en' },
        ],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export default bootstrap;
