import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardalert',
  templateUrl: './cardalert.component.html',
  styleUrls: ['./cardalert.component.scss']
})
export class CardalertComponent implements OnInit {

  @Input() tipo:string = '';
  @Input() fabricacion:string = '';
  @Input() MarkUp:string = '';
  @Input() FechaEdit: string ='';
  @Input() buttonactiontrash:boolean=false;
  @Input() buttonactionedit:boolean = false;
  @Input() TitleCard: string = '';
  @Input() type:string = '';
  @Input() precio:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
