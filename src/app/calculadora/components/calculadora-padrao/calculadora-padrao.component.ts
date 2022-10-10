import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-padrao',
  templateUrl: './calculadora-padrao.component.html',
  styleUrls: ['./calculadora-padrao.component.css']
})
export class CalculadoraPadraoComponent implements OnInit {

  private primeiroNumero: string;
  private segundoNumero: string;
  private resultado: number;
  private operador: string;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(): number {
    if (this.operador == '+')
      return parseFloat(this.primeiroNumero) + parseFloat(this.segundoNumero);
    return 1;
  }
}
