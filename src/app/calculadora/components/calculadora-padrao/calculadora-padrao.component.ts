import { Component, OnInit } from '@angular/core';
import { CalculadoraModel } from "../../model/calculadora.model";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-calculadora-padrao',
  templateUrl: './calculadora-padrao.component.html',
  styleUrls: ['./calculadora-padrao.component.css']
})
export class CalculadoraPadraoComponent implements OnInit {

   calculadora: CalculadoraModal;
   calculadoraForm: FormGroup;
   resultado: number | undefined;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.calculadoraForm = this.formBuilder.group(controls: {
      primeiroNumero: ['', [Validators.required/*, Validators.pattern(pattern: /^[0-9]/)*/]],
      segundoNumero: ['', [Validators.required/*, Validators.pattern(pattern: /^[0-9]/)*/]],
      operador: ['', [Validators.required]],
    })
  }

  processaCalculo() {
    const calc = this.calculadoraForm.getRawValue() as CalculadoraModal;

    if(calc.operador === '+') {
      this.soma(calc.primeiroNumero, calc.segundoNumero);
    }
  }

  soma(primeiro:number, segundo:number): void {
    this.resultado = primeiro + segundo;
  }
}
