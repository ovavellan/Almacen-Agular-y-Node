import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualizarComponent } from './formulario-actualizar.component';

describe('FormularioActualizarComponent', () => {
  let component: FormularioActualizarComponent;
  let fixture: ComponentFixture<FormularioActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioActualizarComponent]
    });
    fixture = TestBed.createComponent(FormularioActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
