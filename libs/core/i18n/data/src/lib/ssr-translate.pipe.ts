import { inject, Pipe, PipeTransform } from '@angular/core';

import { Translated, TranslatedString, languages } from '@my-profile-ssr/shared/common-data';
import { appLanguage } from './providers';

@Pipe({
  name: 'st'
})
export class MpSstTranslate implements PipeTransform {

  public language: languages = inject(appLanguage);
  
  transform(value: Translated | string | undefined): string {
    if (!value) return '';
    return value[this.language as keyof TranslatedString] ?? value;
  }
}