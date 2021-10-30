import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Servico{
  url='/api/cars'
  constructor(private http: HttpClient){

  }
  getCarros(){
    return this.http.get(this.url);
  