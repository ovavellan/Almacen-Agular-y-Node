import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuscaElectrodomesticoComponent} from "./busca-electrodomestico/busca-electrodomestico.component";
import {MasDiezUnidadesComponent} from "./mas-diez-unidades/mas-diez-unidades.component";
import {MenosDiezUnidadesComponent} from "./menos-diez-unidades/menos-diez-unidades.component";
import {CeroUnidadesComponent} from "./cero-unidades/cero-unidades.component";
import {FormularioActualizarComponent} from "./formulario-actualizar/formulario-actualizar.component";


const routes: Routes = [
  {path: "buscarElectrodomestico", component: BuscaElectrodomesticoComponent,
    pathMatch:"full"},
  {path: "masDiezUnidades", component: MasDiezUnidadesComponent,
    pathMatch:"full"},
  {path: "menosDiezUnidades", component: MenosDiezUnidadesComponent,
    pathMatch:"full"},
  {path: "ceroUnidades", component: CeroUnidadesComponent,
    pathMatch:"full"},
  {path: "actualizarElectrodomestico", component: FormularioActualizarComponent,
    pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
