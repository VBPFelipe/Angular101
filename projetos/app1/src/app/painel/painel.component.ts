import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public _frases: Array<Frase> = FRASES
  private _instrucao: string = 'Traduza a frase:'
  private _resposta !: string

  private _rodada: number = 0
  private _rodadaFrase !: Frase

  private _progresso: number = 0

  constructor() { 
    this._rodadaFrase = this._frases[this._rodada]
    console.log(this._rodadaFrase)
  }

  public get instrucao() : string {
    return this._instrucao
  }

  public get resposta() : string {
    return this._resposta
  }

  public get rodadaFrase() : Frase {
    return this._rodadaFrase
  }

  public get progresso() : number {
    return this._progresso
  }

  public set progresso(progresso : number) {
    this._progresso = progresso
  }

  ngOnInit(): void {
  }

  public atualizaResposta(_resposta: Event) : void {
    this._resposta = (<HTMLInputElement>_resposta.target).value
  }

  public verificarResposta() : void {
    // console.log('Verificar resposta: ', this.resposta)

    if(this._rodadaFrase.frasePtBr == this._resposta) {
      alert('A tradução está correta')

      // troca a frase
      this._rodada++
      this._rodadaFrase = this._frases[this._rodada]
      this.progresso += (100.0/this._frases.length)
      console.log(this.progresso)

    } else {
      alert('A tradução está errada')
    }

  }

}
