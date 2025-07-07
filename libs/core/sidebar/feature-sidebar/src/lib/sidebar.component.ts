import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatList, MatListItem } from '@angular/material/list';
import { MpSidebarUiAvatar } from '@my-profile-ssr/core/sidebar/ui-avatar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { profileData, navigationData } from '@my-profile-ssr/shared/common-data';
import { MpSstTranslate } from '@my-profile-ssr/core/i18n-data';


@Component({
  selector: 'mp-sidebar',
  imports: [
    MatCardModule,
    MatButtonModule,
    MpSidebarUiAvatar,
    MatDivider,
    MatList,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MpSstTranslate
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class MpSidebarComponent {
  public profile = inject(profileData);
  public navigation = inject(navigationData);
}
