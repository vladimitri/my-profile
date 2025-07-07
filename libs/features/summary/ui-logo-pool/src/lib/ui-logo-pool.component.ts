import { Component, computed, HostListener, input } from '@angular/core';

import { TechItem } from '@my-profile-ssr/shared/common-data';

import { MpSstTranslate } from '@my-profile-ssr/core/i18n-data';

import { Directive } from '@angular/core';

@Directive({ selector: '[mpTooltip]' })
export class MpTooltipDirective {

  public readonly mpTooltip = input<string>();

  private addElement(element: HTMLElement): void {
    setTimeout(() => {
      element.innerHTML = this.mpTooltip() ?? '';
    }, 500)
    
  }

  private removeElement(element: HTMLElement): void {
    element.innerHTML = '';
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) { 
    const target = event.target as HTMLElement;
    if (target.classList.contains('active')) {
      target.classList.remove('active');
      this.removeElement(target);
    } else {
      target.classList.add('active');
      this.addElement(target);
    }
  }
}

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
