import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeroUnidadesComponent } from './cero-unidades.component';

describe('CeroUnidadesComponent', () => {
  let component: CeroUnidadesComponent;
  let fixture: ComponentFixture<CeroUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeroUnidadesComponent]
    });
    fixture = TestBed.createComponent(CeroUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
