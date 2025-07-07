import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesChatFeatureChat } from './features-chat-feature-chat/features-chat-feature-chat';

describe('FeaturesChatFeatureChat', () => {
  let component: FeaturesChatFeatureChat;
  let fixture: ComponentFixture<FeaturesChatFeatureChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesChatFeatureChat],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesChatFeatureChat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
