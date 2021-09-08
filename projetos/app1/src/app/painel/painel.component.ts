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
  private _resposta : string = ''

  private _rodada: number = 0
  private _rodadaFrase !: Frase

  private _progresso: number = 0

  private _tentativas: number = 3

  constructor() { 
    this.atualizaRodada()
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

  public get tentativas() : number {
    return this._tentativas
  }

  public set tentativas(tentativas : number ) {
    this._tentativas = tentativas
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event) : void {
    this._resposta = (<HTMLInputElement>resposta.target).value
                      .trim() // elimina espaços em branco antes ou depois da frase completa
  }

  public verificarResposta() : void {
    // console.log('Verificar resposta: ', this.resposta)
    console.log(this._tentativas)
    if(this._rodadaFrase.frasePtBr == this._resposta) {
      alert('A tradução está correta')

      // troca a frase
      this._rodada++
      this._rodadaFrase = this._frases[this._rodada]
      this.progresso += (100.0/this._frases.length)
      console.log(this.progresso)

      //atualiza o objeto rodadaFrase
      this.atualizaRodada()

    } else {
      alert('A tradução está errada')

      // diminuir a variável tentativas
      this.tentativas--

      if(this._tentativas === -1) {
        alert('Você perdeu todas as tentativas!')
      }
      
    }
    console.log(this._tentativas)

  }

  public atualizaRodada() : void {
    this._rodadaFrase = this._frases[this._rodada]
    
    //limpar a resposta
    this._resposta = ''

  }

}
