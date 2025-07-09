import { inject, InjectionToken } from '@angular/core';
import { languages } from '@my-profile-ssr/shared/common-data';
import { AppTranslations } from './translations';
import { translations } from './translations'; // <-- import your translations object

export const appLanguage = new InjectionToken<languages>('App Language');

export const translation: InjectionToken<AppTranslations> = new InjectionToken<AppTranslations>('App Translations', {
  providedIn: 'root',
  factory: () => {
    const lang = inject(appLanguage);
    return translations[lang] ?? translations['en'];
  }
});
