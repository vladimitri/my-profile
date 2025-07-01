import { ComponentFixture, TestBed } from '@angular/core/testing';
import { I18nData } from './i18n-data';

describe('I18nData', () => {
  let component: I18nData;
  let fixture: ComponentFixture<I18nData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [I18nData],
    }).compileComponents();

    fixture = TestBed.createComponent(I18nData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
