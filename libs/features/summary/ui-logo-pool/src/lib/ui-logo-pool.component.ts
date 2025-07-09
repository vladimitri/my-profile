import { Component, computed, input } from '@angular/core';

import { TechItem } from '@my-profile-ssr/shared/common-data';

import { MpSstTranslate } from '@my-profile-ssr/core/i18n-data';

import { MpTooltipDirective } from '@my-profile-ssr/features/summary-data';

@Component({
  selector: 'mp-ui-logo-pool',
  imports: [
    MpSstTranslate,
    MpTooltipDirective
  ],
  templateUrl: './ui-logo-pool.component.html',
  styleUrl: './ui-logo-pool.component.scss',
})
export class MpUiLogoPool {
  public readonly items = input<TechItem[]>();
  public readonly mappedItems = computed(() => {
    return this.items()?.map(item => ({
      ...item,
      icon: `url('${item.icon}')`
    }))
  })
}
