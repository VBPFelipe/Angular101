import { Component, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  private _coracaoVazio: string = '/assets/coracao_vazio.png'
  private _coracaoCheio: string = '/assets/coracao_cheio.png'

  private _coracoes : Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { 
    console.log(this._coracoes)
  }

  ngOnInit(): void {
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

}
