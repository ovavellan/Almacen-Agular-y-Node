import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AlmacenService} from "../almacen.service";

@Component({
  selector: 'app-busca-electrodomestico',
  templateUrl: './busca-electrodomestico.component.html',
  styleUrls: ['./busca-electrodomestico.component.css']
})
export class BuscaElectrodomesticoComponent {

  public electrodomestico: any;
  public codigo: string = "";
  public cantidad_unidades: string = "";

  constructor(public almacenService: AlmacenService, private router: Router) {}

  async obtenerElectrodomesticoPorCodigo() {
    try {
      this.electrodomestico = await this.almacenService.getElectrodomesticoByCodigo(this.codigo);


      this.cantidad_unidades = this.electrodomestico[0].cantidad_unidades;
      const cantidadUnidadesNumero = parseInt(this.cantidad_unidades, 10);

      if (cantidadUnidadesNumero > 10) {
        this.redirectToMasDiezUnidades();
      } else if ((cantidadUnidadesNumero < 10)&& (cantidadUnidadesNumero != 0)) {
        this.redirectToMenosDiezUnidades();
      }else if (cantidadUnidadesNumero == 0){
        this.redirectToCeroUnidades();
      }

    } catch (error) {
      console.log(error);
    }
  }

  redirectToMasDiezUnidades() {
    const electrodomesticoId = this.electrodomestico[0].id;
    this.router.navigate(['/masDiezUnidades', { id: electrodomesticoId }]);
  }
  redirectToMenosDiezUnidades() {
    const electrodomesticoId = this.electrodomestico[0].id;
    this.router.navigate(['/menosDiezUnidades', { id: electrodomesticoId }]);
  }
  redirectToCeroUnidades() {
    const electrodomesticoId = this.electrodomestico[0].id;
    this.router.navigate(['/ceroUnidades', { id: electrodomesticoId }]);
  }


}
