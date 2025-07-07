import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

type TechItem = {
  label: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'mp-ui-logo-pool',
  imports: [CommonModule],
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
