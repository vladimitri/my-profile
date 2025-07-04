import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'mp-summary',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class MpSummaryComponent {}
