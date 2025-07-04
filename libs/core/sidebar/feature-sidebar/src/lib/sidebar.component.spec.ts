import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MpSidebarComponent } from './sidebar.component';

describe('MpSidebarComponent', () => {
  let component: MpSidebarComponent;
  let fixture: ComponentFixture<MpSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MpSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
