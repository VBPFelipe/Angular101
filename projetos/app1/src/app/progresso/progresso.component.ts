import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  // @Input()
  private _progresso: number = 0

  constructor() { }

  public get progresso() : number {
    return this._progresso
  }

  @Input()
  public set progresso(progresso : number ) {
    this._progresso = progresso
  }

  ngOnInit(): void {
  }

}
