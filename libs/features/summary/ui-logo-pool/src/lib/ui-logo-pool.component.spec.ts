import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreSummaryUiLogoPool } from './ui-logo-pool.component';

describe('CoreSummaryUiLogoPool', () => {
  let component: CoreSummaryUiLogoPool;
  let fixture: ComponentFixture<CoreSummaryUiLogoPool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreSummaryUiLogoPool],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreSummaryUiLogoPool);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
