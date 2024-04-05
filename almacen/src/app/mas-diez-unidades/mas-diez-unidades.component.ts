import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AlmacenService} from "../almacen.service";

@Component({
  selector: 'app-mas-diez-unidades',
  templateUrl: './mas-diez-unidades.component.html',
  styleUrls: ['./mas-diez-unidades.component.css']
})
export class MasDiezUnidadesComponent implements OnInit {
  public electrodomestico: any;
  public nombre: string = "";
  public marca: string = "";
  public modelo: string = "";
  public fecha_elaboracion: string = "";
  public mostrarDetalles: boolean = false;
  public id: number = 0;

  constructor(
    public AlmacenService: AlmacenService,
    public activateRoute: ActivatedRoute,
    public router: Router) {
    this.id = parseInt(this.activateRoute.snapshot.params['id'], 10);
  }

  ngOnInit(): void {
    this.electrodomesticoPorID();
  }

  async electrodomesticoPorID() {
    try {
      this.electrodomestico = await this.AlmacenService.getElectrodomesticoById(this.id);

      this.nombre = this.electrodomestico[0].nombre;
      this.marca = this.electrodomestico[0].marca;
      this.modelo = this.electrodomestico[0].modelo;
      this.fecha_elaboracion = this.electrodomestico[0].fecha_elaboracion;

      this.mostrarDetalles = true;
    } catch (error) {
      console.log(error);
    }
  }
}
