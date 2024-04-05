import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  url= "http://localhost:3000/";
  constructor(public http:HttpClient) { }

  //Consultar electrodomestico por codigo
  getElectrodomesticoByCodigo(Codigo: String){
    return new Promise(resolve => {
      this.http.get(this.url + 'electrodomestico/' + Codigo).subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  //consultar electrodomestico por id
  getElectrodomesticoById(id: number){
    return new Promise(resolve => {
      this.http.get(this.url + 'electrodomestico/getById/' + id).subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  //Consultar los datos de los electrodomésticos con menos de 10 unidades
  getElectrodomesticosMenosDiez(){
    return new Promise(resolve => {
      this.http.get(this.url + 'electrodomesticosMenosDiez').subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  //Consultar los datos de los electrodomésticos con 0 unidades
  getElectrodomesticosCero(){
    return new Promise(resolve => {
      this.http.get(this.url + 'electrodomesticosCero').subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  //Actualizar un electrodomestico
  updateElectrodomestico(id: number, electrodomestico: any){
    return new Promise(resolve => {
      this.http.put(this.url + 'electrodomestico/update/' + id, electrodomestico).subscribe({
        next: (data) => {
          resolve(data);
        },
        error(err){
          console.log(err)
        }
      })
    })
  }
}
