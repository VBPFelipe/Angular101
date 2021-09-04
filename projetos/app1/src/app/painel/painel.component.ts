import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES
  private instrucao: string = 'Traduza a frase:'

  constructor() { console.log(this.frases)}

  public getInstrucao() : string {
    return this.instrucao
  }

  ngOnInit(): void {
  }

}
