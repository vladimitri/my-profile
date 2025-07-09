import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


import { provideExperineceTransferState, experienceData, summaryData } from '@my-profile-ssr/shared/common-data';
import { MpUiExperience } from '@my-profile-ssr/features/summary-ui-experience';
import { MpUiSimpleSummary } from '@my-profile-ssr/features/summary-ui-simple-summary';
 
@Component({
  selector: 'mp-summary',
  imports: [ MatButtonModule, MpUiExperience, MpUiSimpleSummary],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [
    provideExperineceTransferState()
  ]
})
export class MpSummaryComponent {
  public readonly experience = inject(experienceData);
  public readonly summary = inject(summaryData);
}
