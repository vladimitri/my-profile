import {
  ApplicationConfig,
  inject,
  InjectionToken,
  provideBrowserGlobalErrorListeners,
  Provider,
  provideZoneChangeDetection,
} from '@angular/core';
import { BaseRouteReuseStrategy, provideRouter, RouteReuseStrategy, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';
import { DataPayload, initialPayloadData } from '@my-profile-ssr/shared/common-data';

export function provideIfInexistent<T>(token: InjectionToken<T>, value: T): Provider {
  return {
    provide: token,
    useFactory: () =>
      inject(token, { optional: true, skipSelf: true }) ?? value,
  };
}

class CustomRouteReuseStrategy extends BaseRouteReuseStrategy {
  override shouldReuseRoute(future: any, curr: any): boolean {
    return (
      future.routeConfig === curr.routeConfig &&
      JSON.stringify(future.params) === JSON.stringify(curr.params)
    );
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideIfInexistent(initialPayloadData, {} as DataPayload),
    provideRouter(
      appRoutes,
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
      })),
    provideAnimations(),
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: CustomRouteReuseStrategy
    // }
  ],
};
