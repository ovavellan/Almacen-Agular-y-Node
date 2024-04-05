import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasDiezUnidadesComponent } from './mas-diez-unidades.component';

describe('MasDiezUnidadesComponent', () => {
  let component: MasDiezUnidadesComponent;
  let fixture: ComponentFixture<MasDiezUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasDiezUnidadesComponent]
    });
    fixture = TestBed.createComponent(MasDiezUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
