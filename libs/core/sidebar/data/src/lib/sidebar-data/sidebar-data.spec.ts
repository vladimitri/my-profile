import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarData } from './sidebar-data';

describe('SidebarData', () => {
  let component: SidebarData;
  let fixture: ComponentFixture<SidebarData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarData],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
