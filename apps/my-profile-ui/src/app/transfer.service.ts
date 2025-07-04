import { inject, Injectable, TransferState } from '@angular/core';
import { initialPayloadData, navigationTransferKey, profileTransferKey } from '@my-profile-ssr/shared/common-data';

@Injectable({
  providedIn: 'root',
})
export class MpTransferStateService {
  private transferState = inject(TransferState);
  public initialData = inject(initialPayloadData);


  initializeTransferState() {
    this.setProfileData(this.initialData.profile);
    this.setNavigationData(this.initialData.navigation);
  }

  private setProfileData(profileData: any) {
    this.transferState.set(profileTransferKey, profileData);
  }

  private setNavigationData(navigationData: any) {
    this.transferState.set(navigationTransferKey, navigationData);
  }
}
