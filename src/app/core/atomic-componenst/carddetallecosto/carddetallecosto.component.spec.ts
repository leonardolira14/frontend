import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddetallecostoComponent } from './carddetallecosto.component';

describe('CarddetallecostoComponent', () => {
  let component: CarddetallecostoComponent;
  let fixture: ComponentFixture<CarddetallecostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddetallecostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddetallecostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
