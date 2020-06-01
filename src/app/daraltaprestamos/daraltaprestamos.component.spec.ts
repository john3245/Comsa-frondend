import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaraltaprestamosComponent } from './daraltaprestamos.component';

describe('DaraltaprestamosComponent', () => {
  let component: DaraltaprestamosComponent;
  let fixture: ComponentFixture<DaraltaprestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaraltaprestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaraltaprestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
