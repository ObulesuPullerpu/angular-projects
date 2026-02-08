import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationCard } from './conversation-card';

describe('ConversationCard', () => {
  let component: ConversationCard;
  let fixture: ComponentFixture<ConversationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
