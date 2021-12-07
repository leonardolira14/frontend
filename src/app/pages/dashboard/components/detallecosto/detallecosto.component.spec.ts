import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecostoComponent } from './detallecosto.component';

describe('DetallecostoComponent', () => {
  let component: DetallecostoComponent;
  let fixture: ComponentFixture<DetallecostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallecostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
