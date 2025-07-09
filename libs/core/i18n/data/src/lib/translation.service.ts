import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MpTranslationService {
  
  public readonly document = inject(DOCUMENT);

  setDocumentLang(lang: string): void {
      this.document.documentElement.lang = lang;
  }
}