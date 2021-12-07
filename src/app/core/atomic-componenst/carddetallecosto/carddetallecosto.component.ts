import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carddetallecosto',
  templateUrl: './carddetallecosto.component.html',
  styleUrls: ['./carddetallecosto.component.scss']
})
export class CarddetallecostoComponent implements OnInit {
  @Input() arrayLis:any = [];
  @Input() buttonactiontrash:boolean=false;
  @Input() buttonactionedit:boolean = false;
  @Input() FechaEdit:string=''
  @Input() title='';
  constructor() { }

  ngOnInit(): void {
  }

}
