import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiccircComponent } from './graphiccirc.component';

describe('GraphiccircComponent', () => {
  let component: GraphiccircComponent;
  let fixture: ComponentFixture<GraphiccircComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiccircComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiccircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
