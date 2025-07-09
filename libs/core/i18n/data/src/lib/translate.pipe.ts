import { inject, Pipe, PipeTransform } from '@angular/core';

import { translation } from './providers';
import { AppTranslations } from './translations';

@Pipe({
  name: 't'
})
export class MpTranslate implements PipeTransform {

  public translation: AppTranslations = inject(translation);

  transform(value: keyof AppTranslations | undefined): string {
    if (!value) return '';
    return this.translation[value] ?? value;
  }
}