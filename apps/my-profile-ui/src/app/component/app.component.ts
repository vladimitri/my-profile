import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MpSidebarComponent } from '@my-profile-ssr/core/siderbar-component';
import { configData, provideConfigTransferState, provideNavigationTransferState, provideProfileTransferState, provideSummaryTransferState, routeTransition, runOnClient, runOnServer } from '@my-profile-ssr/shared/common-data';
import { MpTransferStateService } from '../transfer.service';
import { appLanguage, MpTranslationService } from '@my-profile-ssr/core/i18n-data';

@Component({
  imports: [RouterModule, MpSidebarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeTransition
  ],
  providers: [
    provideConfigTransferState(),
    provideProfileTransferState(),
    provideNavigationTransferState(),
    provideSummaryTransferState()
  ],
})
export class App implements OnInit {

  public activatedRoute = inject(ActivatedRoute);
  public transferService = inject(MpTransferStateService);
  public translationService = inject(MpTranslationService);
  public runCodeOnClient = inject(runOnClient);
  public runCodeOnServer = inject(runOnServer);

  public language = inject(appLanguage);

  public configData = inject(configData);

  ngOnInit(): void {
    this.runCodeOnServer(() => {
      this.transferService.initializeTransferState();
      this.translationService.setDocumentLang(this.language);
    });
  }
}