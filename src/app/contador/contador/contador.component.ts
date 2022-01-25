import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template:`
    <h1> {{titulo}} </h1>
    <h3>La base es: <strong>{{base}}</strong><button (click)="acumularBase(1);">+1</button><button (click)="acumularBase(-1);">-1</button></h3>
    <button (click)="acumular(base);">+{{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumular(-base);">-{{base}}</button>

  `

})
export class ContadorComponente{
  public titulo: string = 'Contador App';
  public numero: number = 10;
  public base:number = 5;
  acumular(valor:number){
    this.numero += valor;
  }
  acumularBase(valor2:number){
    this.base += valor2;
  }
}
