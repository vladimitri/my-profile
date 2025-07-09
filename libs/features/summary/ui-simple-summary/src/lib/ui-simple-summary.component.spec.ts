import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesSummaryUiSimpleSummary } from './ui-simple-summary.component';

describe('FeaturesSummaryUiSimpleSummary', () => {
  let component: FeaturesSummaryUiSimpleSummary;
  let fixture: ComponentFixture<FeaturesSummaryUiSimpleSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesSummaryUiSimpleSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesSummaryUiSimpleSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
