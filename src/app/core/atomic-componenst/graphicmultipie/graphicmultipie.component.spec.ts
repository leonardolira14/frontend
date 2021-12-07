import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicmultipieComponent } from './graphicmultipie.component';

describe('GraphicmultipieComponent', () => {
  let component: GraphicmultipieComponent;
  let fixture: ComponentFixture<GraphicmultipieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicmultipieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicmultipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
