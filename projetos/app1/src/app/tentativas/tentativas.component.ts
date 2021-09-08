import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/assets/coracao_vazio.png'
  public coracaoCheio: string = '/assets/coracao_cheio.png'
  private _coracaoCheio2: string = '/assets/coracao_cheio.png'

  private _teste: string = 'Teste'

  public get coracaoCheio2() : string {
    return this._coracaoCheio2
  }

  public get teste() : string {
    return this._teste
  }

  constructor() { }

  ngOnInit(): void {
  }

}
