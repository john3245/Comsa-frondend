import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaraltaherramientaComponent } from './daraltaherramienta.component';

describe('DaraltaherramientaComponent', () => {
  let component: DaraltaherramientaComponent;
  let fixture: ComponentFixture<DaraltaherramientaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaraltaherramientaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaraltaherramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
