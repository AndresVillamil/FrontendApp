import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarSolicitudesComponent } from './enviar-solicitudes.component';

describe('EnviarSolicitudesComponent', () => {
  let component: EnviarSolicitudesComponent;
  let fixture: ComponentFixture<EnviarSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarSolicitudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
