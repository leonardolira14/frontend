import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardproductshome',
  templateUrl: './cardproductshome.component.html',
  styleUrls: ['./cardproductshome.component.scss']
})
export class CardproductshomeComponent implements OnInit {
@Input() Titulo:string = '';
@Input() Precio:string = '';
@Input() MarkUp:string = '';
@Input() Label:string = '';
@Input() Porcentaje:string = '';
@Input() Fecha: string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
