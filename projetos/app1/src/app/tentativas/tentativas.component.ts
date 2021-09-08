import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  private _coracaoVazio: string = '/assets/coracao_vazio.png'
  private _coracaoCheio: string = '/assets/coracao_cheio.png'

  private _tentativas !: number

  private _coracoes : Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { 
    // console.log(this._coracoes)
    // console.log(this._tentativas) 
    /* vai exibir 'undefined' devido o tempo de vida do componente
    O motivo: quando o construtor é executado, ainda não foi definido os parâmetros de entrada */
  }

  // Executado sempre que há um input de dados
  ngOnChanges() : void {

    //this._tentativas
    //this._coracoes.length
    if(this._tentativas !== this._coracoes.length) {
      let indice = this._coracoes.length - this._tentativas
      this._coracoes[indice-1].cheio = false
    }
    console.log('Tentativas recebidas do painel: ' + this._tentativas)
  }

  ngOnInit(): void { 
    // console.log(this._tentativas) 
  }

  public get coracaoCheio() : string {
    return this._coracaoCheio
  }

  public get coracaoVazio() : string {
    return this._coracaoVazio
  }

  public get coracoes() : Array<Coracao> {
    return this._coracoes
  }

  public get tentativas() : number {
    return this._tentativas
  }

  @Input()
  public set tentativas(tentativas : number ) {
    this._tentativas = tentativas
  }

}
