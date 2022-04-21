import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninpassComponent } from './signinpass.component';

describe('SigninpassComponent', () => {
  let component: SigninpassComponent;
  let fixture: ComponentFixture<SigninpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
