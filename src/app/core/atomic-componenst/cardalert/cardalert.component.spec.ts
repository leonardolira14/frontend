import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardalertComponent } from './cardalert.component';

describe('CardalertComponent', () => {
  let component: CardalertComponent;
  let fixture: ComponentFixture<CardalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
