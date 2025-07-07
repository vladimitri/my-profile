import { inject, Injectable, TransferState } from '@angular/core';
import { configTransferKey, experienceTransferKey, initialPayloadData, navigationTransferKey, profileTransferKey } from '@my-profile-ssr/shared/common-data';

@Injectable({
  providedIn: 'root',
})
export class MpTransferStateService {
  private transferState = inject(TransferState);
  public initialData = inject(initialPayloadData);


  initializeTransferState() {
    this.setProfileData(this.initialData.profile);
    this.setNavigationData(this.initialData.navigation);
    this.setConfigData(this.initialData.config);
    this.setExperienceData(this.initialData.experience);
  }

  private setProfileData(profileData: any) {
    this.transferState.set(profileTransferKey, profileData);
  }

  private setNavigationData(navigationData: any) {
    this.transferState.set(navigationTransferKey, navigationData);
  }

  private setConfigData(configData: any) {
    this.transferState.set(configTransferKey, configData);
  }

  private setExperienceData(experienceData: any) {
    this.transferState.set(experienceTransferKey, experienceData);
  }
}
