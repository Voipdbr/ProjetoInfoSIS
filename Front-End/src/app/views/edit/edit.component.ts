import { Component, OnInit } from '@angular/core';
import { Servicoexec, Servicos } from '../../service/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  ListarCarro!: Servicos[];
  servico: Servicos={
    id: 0,
    placa: '',
    renavam: '',
    chassi: '',
    modelo: '',
    marca: '',
    ano: 0
  };

  constructor(private Servicoexec: Servicoexec, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    console.log("id de entrada "+params.id)
    if(params.id){
      this.Servicoexec.findById(params.id).subscribe(
        (response: any) =>{
        this.servico = response[0];
        this.ListarCarro = response;
        console.log(response[0]);
        },
        err=>console.log(err)
      )
    }
  }

  modificarId(id: number){
    this.Servicoexec.modificarCarros(id, this.servico).subscribe(
      response =>{
        console.log(response)
      },
      err => console.log(err)
    );
    this.router.navigate(['/'])
  }
}
