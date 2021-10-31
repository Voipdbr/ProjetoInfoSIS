import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Servicoexec{
  url='/api/cars'
  constructor(private http: HttpClient){

  }
  getCarros(){
    return this.http.get(this.url);
  }

  addCarros(carros: Servicos){
    return this.http.post(this.url, carros)
  }

  findById(id: number){
    return this.http.get(this.url + '/' + id)
  }

  deleteCarros(id: number){
    return this.http.delete(this.url + '/' + id)
  }

  modificarCarros(id: number, car: Servicos){
    return this.http.put(this.url + '/' + id, car);
  }
}

export interface Servicos{
  id?: any;
  placa?: string;
  renavam?: string;
  chassi?: string;
  modelo?: string;
  marca?: string;
  ano?: number
}
