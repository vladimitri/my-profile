import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { provideExperineceTransferState, experienceData } from '@my-profile-ssr/shared/common-data';
import { MpUiLogoPool } from '@my-profile-ssr/features/summary-ui-logo-pool';

@Component({
  selector: 'mp-summary',
  imports: [MatCardModule, MatButtonModule, MatDivider, MpUiLogoPool],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [
    provideExperineceTransferState()
  ]
})
export class MpSummaryComponent {
  public readonly experience = inject(experienceData);
  public readonly backgroundMapper = (path: string) => `url('${path}')`;
}
