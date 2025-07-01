import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryData } from './summary-data';

describe('SummaryData', () => {
  let component: SummaryData;
  let fixture: ComponentFixture<SummaryData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryData],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
