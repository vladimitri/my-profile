import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreSummaryUiExperience } from './ui-experience.component';

describe('CoreSummaryUiExperience', () => {
  let component: CoreSummaryUiExperience;
  let fixture: ComponentFixture<CoreSummaryUiExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreSummaryUiExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreSummaryUiExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
