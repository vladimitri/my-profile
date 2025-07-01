import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedCommonData } from './shared-common-data';

describe('SharedCommonData', () => {
  let component: SharedCommonData;
  let fixture: ComponentFixture<SharedCommonData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCommonData],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCommonData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
