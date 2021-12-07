import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardalertviewComponent } from './cardalertview.component';

describe('CardalertviewComponent', () => {
  let component: CardalertviewComponent;
  let fixture: ComponentFixture<CardalertviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardalertviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardalertviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
