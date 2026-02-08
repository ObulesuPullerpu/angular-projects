import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFormat } from './table-format';

describe('TableFormat', () => {
  let component: TableFormat;
  let fixture: ComponentFixture<TableFormat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFormat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFormat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
