import { Component, input } from '@angular/core';
import { TranslatedString } from '@my-profile-ssr/shared/common-data';

import { MatDivider } from '@angular/material/divider';

import { MpSstTranslate } from '@my-profile-ssr/core/i18n-data';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'mp-ui-simple-summary',
  imports: [MpSstTranslate, MatDivider, MatCardModule],
  templateUrl: './ui-simple-summary.component.html',
  styleUrl: './ui-simple-summary.component.scss',
})
export class MpUiSimpleSummary {

  public readonly title = input<TranslatedString>();
  public readonly description = input<TranslatedString>();

}
