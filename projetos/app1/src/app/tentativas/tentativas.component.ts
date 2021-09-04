import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/assets/coracao_vazio.png'
  public coracaoCheio: string = '/assets/coracao_cheio.png'
  private coracaoCheio2: string = '/assets/coracao_cheio.png'

  private teste: string = 'Teste'

  public getCoracaoCheio2() : string {
    return this.coracaoCheio2
  }

  public getTeste() : string {
    return this.teste
  }

  constructor() { }

  ngOnInit(): void {
  }

}
