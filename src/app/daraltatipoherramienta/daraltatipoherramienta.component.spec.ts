import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaraltatipoherramientaComponent } from './daraltatipoherramienta.component';

describe('DaraltatipoherramientaComponent', () => {
  let component: DaraltatipoherramientaComponent;
  let fixture: ComponentFixture<DaraltatipoherramientaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaraltatipoherramientaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaraltatipoherramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
