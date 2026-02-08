import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsCard } from './reviews-card';

describe('ReviewsCard', () => {
  let component: ReviewsCard;
  let fixture: ComponentFixture<ReviewsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
