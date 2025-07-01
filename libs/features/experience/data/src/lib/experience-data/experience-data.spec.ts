import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceData } from './experience-data';

describe('ExperienceData', () => {
  let component: ExperienceData;
  let fixture: ComponentFixture<ExperienceData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceData],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
