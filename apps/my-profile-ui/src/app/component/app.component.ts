import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MpSidebarComponent } from '@my-profile-ssr/core/siderbar-component';
import { provideNavigationTransferState, provideProfileTransferState, routeTransition } from '@my-profile-ssr/shared/common-data';
import { MpTransferStateService } from '../transfer.service';
import { isPlatformServer } from '@angular/common';


@Component({
  imports: [RouterModule, MpSidebarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeTransition
  ],
  providers: [
    provideProfileTransferState(),
    provideNavigationTransferState(),
  ],
})
export class App implements OnInit {

  public activatedRoute = inject(ActivatedRoute);
  public transferService = inject(MpTransferStateService);

  private serve = () => {
    this.transferService.initializeTransferState()
  };

  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.serve();
    }
  }
}