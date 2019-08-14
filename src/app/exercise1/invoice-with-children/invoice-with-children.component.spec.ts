import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceWithChildrenComponent } from './invoice-with-children.component';

describe('InvoiceWithChildrenComponent', () => {
  let component: InvoiceWithChildrenComponent;
  let fixture: ComponentFixture<InvoiceWithChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceWithChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceWithChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
