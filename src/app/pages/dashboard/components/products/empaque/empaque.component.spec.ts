import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaqueComponent } from './empaque.component';

describe('EmpaqueComponent', () => {
  let component: EmpaqueComponent;
  let fixture: ComponentFixture<EmpaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
