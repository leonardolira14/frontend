import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsbarsComponent } from './graphicsbars.component';

describe('GraphicsbarsComponent', () => {
  let component: GraphicsbarsComponent;
  let fixture: ComponentFixture<GraphicsbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsbarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
