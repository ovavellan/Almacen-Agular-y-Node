import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { BuscaElectrodomesticoComponent } from './busca-electrodomestico/busca-electrodomestico.component';
import { MasDiezUnidadesComponent } from './mas-diez-unidades/mas-diez-unidades.component';
import { MenosDiezUnidadesComponent } from './menos-diez-unidades/menos-diez-unidades.component';
import { CeroUnidadesComponent } from './cero-unidades/cero-unidades.component';
import { FormularioActualizarComponent } from './formulario-actualizar/formulario-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscaElectrodomesticoComponent,
    MasDiezUnidadesComponent,
    MenosDiezUnidadesComponent,
    CeroUnidadesComponent,
    FormularioActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
