import { inject, Pipe, PipeTransform } from '@angular/core';

import { Translated, TranslatedString, languages, runOnClient } from '@my-profile-ssr/shared/common-data';

@Pipe({
  name: 'st'
})
export class MpSstTranslate implements PipeTransform {

  public language: languages = 'en';

  constructor() {
    inject(runOnClient)(() => {
      this.language = (localStorage.getItem('language') ?? 'en') as languages;
    })
  }
  

  transform(value: Translated | string | undefined): string {
    if (!value) return '';
    return value[this.language as keyof TranslatedString] ?? value;
  }
}