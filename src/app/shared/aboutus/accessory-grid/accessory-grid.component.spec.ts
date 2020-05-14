import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryGridComponent } from './accessory-grid.component';

describe('AccessoryGridComponent', () => {
  let component: AccessoryGridComponent;
  let fixture: ComponentFixture<AccessoryGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoryGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
