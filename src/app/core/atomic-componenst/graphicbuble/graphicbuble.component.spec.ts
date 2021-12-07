import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicbubleComponent } from './graphicbuble.component';

describe('GraphicbubleComponent', () => {
  let component: GraphicbubleComponent;
  let fixture: ComponentFixture<GraphicbubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicbubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicbubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
