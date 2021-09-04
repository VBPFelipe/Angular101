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
  private resposta !: string

  constructor() { console.log(this.frases)}

  public getInstrucao() : string {
    return this.instrucao
  }

  public getResposta() : string {
    return this.resposta
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event) : void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.getResposta())
  }

  public verificarResposta() : void {
    console.log('Verificar resposta: ', this.resposta)
  }

}
