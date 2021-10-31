import { Component, OnInit } from '@angular/core';
import { Servicoexec, Servicos } from '../../service/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ListarCarros!: Servicos[];
  servico: Servicos={
    id: 0,
    placa: '',
    renavam: '',
    chassi: '',
    modelo: '',
    marca: '',
    ano: 0
  };
  constructor(private Servicoexec:Servicoexec, private router:Router) { }

  ngOnInit(): void {
    this.listarCarros();
  }

  listarCarros(){
    this.Servicoexec.getCarros().subscribe(response=>{
      console.log(response)
      this.ListarCarros=<any>response;
    },
    err => console.log(err)
    );
  }

  deletarCarro(id: number){
    this.Servicoexec.deleteCarros(id).subscribe(response=>{
      console.log("Carro eliminado");
      this.listarCarros();
    },
    err=> console.log(err)
    )
  }

  modificarCarro(id: number){
  this.router.navigate(['/edit/'+id]);
  }

  criarCarro(){
    delete this.servico.id;

    this.Servicoexec.addCarros(this.servico).subscribe();
  }
}


