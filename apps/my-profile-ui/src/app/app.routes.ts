import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'about',
    loadComponent: () => import('@my-profile-ssr/core/summary-component').then(m => m.MpSummaryComponent)
  },
  {
    path: 'askmeanything',
    loadComponent: () => import('@my-profile-ssr/core/summary-component').then(m => m.MpSummaryComponent)
  },
  {
    path: '**',
    redirectTo: 'about',
  }
];

