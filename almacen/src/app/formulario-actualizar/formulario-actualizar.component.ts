import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {AlmacenService} from "../almacen.service";

@Component({
  selector: 'app-formulario-actualizar',
  templateUrl: './formulario-actualizar.component.html',
  styleUrls: ['./formulario-actualizar.component.css']
})
export class FormularioActualizarComponent implements OnInit{

  public electrodomestico: any;
  public id: number = 0;
  public codigo: String = '';
  public nombre: String = '';
  public marca: String = '';
  public modelo: String = '';
  public fecha_elaboracion: String = '';
  public cantidad_unidades: String = '';

  constructor(public AlmacenService: AlmacenService,
              public ActivateRoute: ActivatedRoute,
              public router:Router) {
    this.id = this.ActivateRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.obtenerElectrodomesticoPorId();
  }
  async obtenerElectrodomesticoPorId() {
    try {
      this.electrodomestico = await this.AlmacenService.getElectrodomesticoById(this.id);
      this.codigo = this.electrodomestico[0].codigo;
      this.nombre = this.electrodomestico[0].nombre;
      this.marca = this.electrodomestico[0].marca;
      this.modelo = this.electrodomestico[0].modelo;
      this.fecha_elaboracion = this.electrodomestico[0].fecha_elaboracion;
      this.cantidad_unidades = this.electrodomestico[0].cantidad_unidades;
    } catch (error) {
      console.log(error);
    }
  }

  async actualizarElectrodomestico(){
    try{
      const electrodomestico = {
        codigo: this.codigo,
        nombre: this.nombre,
        marca: this.marca,
        modelo: this.modelo,
        fecha_elaboracion: this.fecha_elaboracion,
        cantidad_unidades: this.cantidad_unidades
      };
      await this.AlmacenService.updateElectrodomestico(this.id, electrodomestico)
      console.log("Electrodoméstico actualizado correctamente");
      alert('Electrodoméstico actualizado correctamente');
      this.router.navigate(['/buscarElectrodomestico'])
    } catch (error){
      console.log(error);
    }
  }


}
