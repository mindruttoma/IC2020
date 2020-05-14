import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdComponent } from './prod.component';

describe('ProductComponent', () => {
  let component: ProdComponent;
  let fixture: ComponentFixture<ProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
