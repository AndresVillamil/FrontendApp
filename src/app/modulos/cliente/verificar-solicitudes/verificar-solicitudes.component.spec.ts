import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarSolicitudesComponent } from './verificar-solicitudes.component';

describe('VerificarSolicitudesComponent', () => {
  let component: VerificarSolicitudesComponent;
  let fixture: ComponentFixture<VerificarSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarSolicitudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
