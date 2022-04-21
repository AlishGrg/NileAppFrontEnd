import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysngamesComponent } from './toysngames.component';

describe('ToysngamesComponent', () => {
  let component: ToysngamesComponent;
  let fixture: ComponentFixture<ToysngamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysngamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysngamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
