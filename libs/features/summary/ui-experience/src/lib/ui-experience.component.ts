import { Component, computed, input } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { ExperienceItem } from '@my-profile-ssr/shared/common-data';
import { MpUiLogoPool } from '@my-profile-ssr/features/summary-ui-logo-pool';

import { MpSstTranslate, MpTranslate } from '@my-profile-ssr/core/i18n-data';

@Component({
  selector: 'mp-ui-experience',
  imports: [MpUiLogoPool, MatDivider, MatCardModule, MpSstTranslate, MpTranslate],
  templateUrl: './ui-experience.component.html',
  styleUrls: ['./ui-experience.component.scss'],
})
export class MpUiExperience {

  public readonly experience = input<ExperienceItem>();
  public readonly logo = computed(() => {
    const experience = this.experience();
    return `url('${experience?.employer.logo}')`
  })

}
