import { Component, OnInit, Output } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  private _ofertas!: Array<Oferta>

  constructor(private _ofertasService: OfertasService) { 

  }

  ngOnInit(): void {
    this._ofertas = this._ofertasService.getOfertas()
    console.log(this._ofertas)
  }

  public get ofertas(): Array<Oferta> {
    return this._ofertas
  }

  public set ofertas(ofertas: Array<Oferta>) {
    this._ofertas= ofertas
  }

}
