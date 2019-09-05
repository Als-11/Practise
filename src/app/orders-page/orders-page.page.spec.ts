import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPagePage } from './orders-page.page';

describe('OrdersPagePage', () => {
  let component: OrdersPagePage;
  let fixture: ComponentFixture<OrdersPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
