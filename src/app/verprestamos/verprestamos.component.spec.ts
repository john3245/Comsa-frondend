import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerprestamosComponent } from './verprestamos.component';

describe('VerprestamosComponent', () => {
  let component: VerprestamosComponent;
  let fixture: ComponentFixture<VerprestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerprestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerprestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
