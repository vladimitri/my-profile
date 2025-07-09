
import { Directive, HostListener, input } from '@angular/core';

@Directive({
  selector: '[mpTooltip]',
})
export class MpTooltipDirective {
  private _toggleClass = 'mp-show-tooltip';
  private style: Partial<CSSStyleDeclaration> = {
    position: 'absolute',
    right: '0',
    top: '0',
    padding: '1rem 1.5rem 1rem 3rem',
    margin: '0',
    width: '100%',
    color: 'transparent',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box'
  }

  public readonly mpTooltip = input<string>();

  private createElement(): HTMLElement {
    const p = document.createElement('p');
    Object.entries(this.style).forEach(([key, value]) => {
      if (value !== undefined) {
        (p.style as any)[key] = value;
      }
    });
    p.textContent = this.mpTooltip() ?? '';
    return p;
  }
  
  private hideTooltip(target: HTMLElement): void {
    target.innerHTML = '';
    target.style.height = '';
    target.style.width = '';
    target.classList.remove(this._toggleClass);
  }

  private showTooltip(target: HTMLElement): void {
    target.classList.add(this._toggleClass);
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
    if (target.classList.contains('mp-show-tooltip')) {
      this.hideTooltip(target);
    } else {
      this.showTooltip(target)
    }
  }
}


