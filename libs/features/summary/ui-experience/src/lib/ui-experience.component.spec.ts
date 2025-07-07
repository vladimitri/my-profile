import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MpUiExperience } from './ui-experience.component';

describe('CoreSummaryUiExperience', () => {
  let component: MpUiExperience;
  let fixture: ComponentFixture<MpUiExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpUiExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(MpUiExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
