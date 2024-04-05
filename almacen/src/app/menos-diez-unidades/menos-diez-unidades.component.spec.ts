import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenosDiezUnidadesComponent } from './menos-diez-unidades.component';

describe('MenosDiezUnidadesComponent', () => {
  let component: MenosDiezUnidadesComponent;
  let fixture: ComponentFixture<MenosDiezUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenosDiezUnidadesComponent]
    });
    fixture = TestBed.createComponent(MenosDiezUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
