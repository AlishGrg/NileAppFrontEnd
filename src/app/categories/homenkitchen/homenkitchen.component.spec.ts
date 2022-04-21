import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenkitchenComponent } from './homenkitchen.component';

describe('HomenkitchenComponent', () => {
  let component: HomenkitchenComponent;
  let fixture: ComponentFixture<HomenkitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomenkitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenkitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
