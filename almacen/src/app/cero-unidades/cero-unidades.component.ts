import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlmacenService} from "../almacen.service";
import { ActivatedRoute } from '@angular/router';;

@Component({
  selector: 'app-cero-unidades',
  templateUrl: './cero-unidades.component.html',
  styleUrls: ['./cero-unidades.component.css']
})
export class CeroUnidadesComponent implements OnInit{

  public electrodomestico: any;
  public todosElectrodomesticos: any;
  public id: number = 0;
  public codigo: String = '';
  public nombre: String = '';
  public marca: String = '';
  public modelo: String = '';
  public fecha_elaboracion: String = '';
  public cantidad_unidades: String = '';


  constructor(public almacenService: AlmacenService,
              public ActivateRoute: ActivatedRoute,
              private router: Router) {
    this.id = this.ActivateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mostrarDatoElectrodomestico();
    this.traerTodosElectrodomesticos();
  }

  async mostrarDatoElectrodomestico() {
    try {
      this.electrodomestico = await this.almacenService.getElectrodomesticoById(this.id);
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

  traerTodosElectrodomesticos(){
    this.almacenService.getElectrodomesticosCero().then(data=>this.todosElectrodomesticos=data)
  }
  getNumeroElectrodomesticos(): number {
    return this.todosElectrodomesticos ? this.todosElectrodomesticos.length : 0;
  }

  actualizarElectrodomestico(id:number){
    this.router.navigate(['/actualizarElectrodomestico', {id:id}])
  }
}
