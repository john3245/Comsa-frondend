import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdetalleprestamosComponent } from './verdetalleprestamos.component';

describe('VerdetalleprestamosComponent', () => {
  let component: VerdetalleprestamosComponent;
  let fixture: ComponentFixture<VerdetalleprestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerdetalleprestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdetalleprestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
