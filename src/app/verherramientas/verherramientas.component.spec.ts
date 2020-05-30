import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerherramientasComponent } from './verherramientas.component';

describe('VerherramientasComponent', () => {
  let component: VerherramientasComponent;
  let fixture: ComponentFixture<VerherramientasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerherramientasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerherramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
