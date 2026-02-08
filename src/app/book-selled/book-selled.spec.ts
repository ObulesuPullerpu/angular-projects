import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelled } from './book-selled';

describe('BookSelled', () => {
  let component: BookSelled;
  let fixture: ComponentFixture<BookSelled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSelled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSelled);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
