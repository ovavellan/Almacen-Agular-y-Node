import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaElectrodomesticoComponent } from './busca-electrodomestico.component';

describe('BuscaElectrodomesticoComponent', () => {
  let component: BuscaElectrodomesticoComponent;
  let fixture: ComponentFixture<BuscaElectrodomesticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaElectrodomesticoComponent]
    });
    fixture = TestBed.createComponent(BuscaElectrodomesticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
