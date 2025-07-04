import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MpSummaryComponent } from './summary.component';

describe('MpSummaryComponent', () => {
  let component: MpSummaryComponent;
  let fixture: ComponentFixture<MpSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MpSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
