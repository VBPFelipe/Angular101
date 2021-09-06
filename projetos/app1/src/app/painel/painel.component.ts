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

  private rodada: number = 0
  private rodadaFrase !: Frase

  public progresso: number = 0

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  }

  public getInstrucao() : string {
    return this.instrucao
  }

  public getResposta() : string {
    return this.resposta
  }

  public getRodadaFrase() : Frase {
    return this.rodadaFrase
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event) : void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.getResposta())
  }

  public verificarResposta() : void {
    // console.log('Verificar resposta: ', this.resposta)

    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta')

      // troca a frase
      this.rodada++
      this.rodadaFrase = this.frases[this.rodada]
      this.progresso += (100.0/this.frases.length)
      console.log(this.progresso)

    } else {
      alert('A tradução está errada')
    }

  }

}
