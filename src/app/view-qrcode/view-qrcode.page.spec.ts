import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQRcodePage } from './view-qrcode.page';

describe('ViewQRcodePage', () => {
  let component: ViewQRcodePage;
  let fixture: ComponentFixture<ViewQRcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQRcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQRcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
