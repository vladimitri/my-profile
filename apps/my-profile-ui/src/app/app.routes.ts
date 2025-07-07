import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'about',
    loadComponent: () => import('@my-profile-ssr/core/summary-component').then(m => m.MpSummaryComponent)
  },
  {
    path: 'askmeanything',
    loadComponent: () => import('@my-profile-ssr/features/chat-component').then(m => m.MpChatFeatureChat)
  },
  {
    path: '**',
    redirectTo: 'about',
  }
];

