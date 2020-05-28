import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosregisComponent } from './empleadosregis.component';

describe('EmpleadosregisComponent', () => {
  let component: EmpleadosregisComponent;
  let fixture: ComponentFixture<EmpleadosregisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosregisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
