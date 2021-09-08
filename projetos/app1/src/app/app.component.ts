import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _jogoEmAndamento : boolean = true
  private _tipoEncerramento !: string

  public encerrarJogo(tipo: string) : void {
    // console.log(tipo)
    this._jogoEmAndamento = false
    this._tipoEncerramento = tipo
  }

  public get jogoEmAndamento() : boolean {
    return this._jogoEmAndamento
  }

  public set jogoEmAndamento(jogoEmAndamento: boolean) {
    this._jogoEmAndamento = jogoEmAndamento
  }

  public get tipoEncerramento() : string {
    return this._tipoEncerramento
  }

  public set tipoEncerramento(tipoEncerramento : string) {
    this._tipoEncerramento = tipoEncerramento
  }

}
