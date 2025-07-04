import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'mp-sidebar-ui-avatar',
  imports: [],
  templateUrl: './ui-avatar.component.html',
  styleUrls: ['./ui-avatar.component.scss'],
})
export class MpSidebarUiAvatar {
  public readonly source = input.required<string>();
  public readonly alt = input<string>('alt');

  public readonly imgPath = computed(() => {
    const source = this.source();
    return `url('${source}')`;
  });
}
