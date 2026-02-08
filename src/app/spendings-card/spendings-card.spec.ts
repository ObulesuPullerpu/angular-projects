import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingsCard } from './spendings-card';

describe('SpendingsCard', () => {
  let component: SpendingsCard;
  let fixture: ComponentFixture<SpendingsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendingsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendingsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
