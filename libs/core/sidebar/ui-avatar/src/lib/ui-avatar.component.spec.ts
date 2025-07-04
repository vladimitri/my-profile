import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MpSidebarUiAvatar } from './ui-avatar.component';

describe('MpSidebarUiAvatar', () => {
  let component: MpSidebarUiAvatar;
  let fixture: ComponentFixture<MpSidebarUiAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpSidebarUiAvatar],
    }).compileComponents();

    fixture = TestBed.createComponent(MpSidebarUiAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
