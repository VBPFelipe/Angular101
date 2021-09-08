import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _jogoEmAndamento : boolean = true

  public encerrarJogo(tipo : string) : void {
    console.log(tipo)
    this._jogoEmAndamento = false
  }

  public get jogoEmAndamento() : boolean {
    return this._jogoEmAndamento
  }

  public set jogoEmAndamento(jogoEmAndamento: boolean) {
    this._jogoEmAndamento = jogoEmAndamento
  }

}
