import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsimpleComponent } from './dropdownsimple.component';

describe('DropdownsimpleComponent', () => {
  let component: DropdownsimpleComponent;
  let fixture: ComponentFixture<DropdownsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownsimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
