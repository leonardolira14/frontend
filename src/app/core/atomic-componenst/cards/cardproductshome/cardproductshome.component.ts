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
@Input() FechaEdit: string ='';
@Input() classhead:string ='';
@Input() classmakeup:string= '';
@Input() buttonactiontrash:boolean=false;
@Input() buttonactionedit:boolean = false;
@Input() NameEditUser:string ='';
@Input() subtitle:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
