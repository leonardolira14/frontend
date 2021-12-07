import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiccakeComponent } from './graphiccake.component';

describe('GraphiccakeComponent', () => {
  let component: GraphiccakeComponent;
  let fixture: ComponentFixture<GraphiccakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiccakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiccakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
