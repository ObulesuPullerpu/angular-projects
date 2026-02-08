import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUsersChart } from './total-users-chart';

describe('TotalUsersChart', () => {
  let component: TotalUsersChart;
  let fixture: ComponentFixture<TotalUsersChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalUsersChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalUsersChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
