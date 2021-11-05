import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardproductshomeComponent } from './cardproductshome.component';

describe('CardproductshomeComponent', () => {
  let component: CardproductshomeComponent;
  let fixture: ComponentFixture<CardproductshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardproductshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardproductshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
