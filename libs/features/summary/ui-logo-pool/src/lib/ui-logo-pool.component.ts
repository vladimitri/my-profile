import { Component, computed, HostListener, input } from '@angular/core';

import { TechItem } from '@my-profile-ssr/shared/common-data';

import { MpSstTranslate } from '@my-profile-ssr/core/i18n-data';

import { Directive } from '@angular/core';

@Directive({
  selector: '[mpTooltip]',
})
export class MpTooltipDirective {

  public readonly mpTooltip = input<string>();

  private createElement(): HTMLElement {
    const p = document.createElement('p');

    p.style.position = 'absolute';
    p.style.right = '0';
    p.style.top = '0';
    p.style.padding = '1rem 1.5rem 1rem 3rem';
    p.style.margin = '0';
    p.style.width = '100%';
    p.style.color = 'transparent';
    p.style.transition = 'all 0.2s ease';
    p.style.boxSizing = 'border-box';

    p.textContent = this.mpTooltip() ?? '';
    return p;
  }
  
  private hideTooltip(target: HTMLElement): void {
    target.innerHTML = '';
    target.style.height = '';
    target.style.width = '';
    target.classList.remove('show-tooltip');
  }

  private showTooltip(target: HTMLElement): void {
    target.classList.add('show-tooltip');
      target.style.width = '100%';
      setTimeout(() => {
        target.appendChild(this.createElement());
        const p = target.querySelector('p');
        const pixelHeight = p?.offsetHeight;
        target.style.height =  `${pixelHeight}px`;
        if (p) {
          setTimeout(() => {
            p.style.color = 'black';
          }, 300)
        }
      }, 300)
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) { 
    let target = event.target as HTMLElement;
    if (target.tagName === 'P') {
      target = target.parentElement as HTMLElement;
    }
    if (target.classList.contains('show-tooltip')) {
      this.hideTooltip(target);
    } else {
      this.showTooltip(target)
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
