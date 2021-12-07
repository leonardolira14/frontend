import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiclineComponent } from './graphicline.component';

describe('GraphiclineComponent', () => {
  let component: GraphiclineComponent;
  let fixture: ComponentFixture<GraphiclineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiclineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
