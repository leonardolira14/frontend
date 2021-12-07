import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsgropuComponent } from './buttonsgropu.component';

describe('ButtonsgropuComponent', () => {
  let component: ButtonsgropuComponent;
  let fixture: ComponentFixture<ButtonsgropuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsgropuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsgropuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
