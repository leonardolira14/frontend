import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdownsimple',
  templateUrl: './dropdownsimple.component.html',
  styleUrls: ['./dropdownsimple.component.scss']
})
export class DropdownsimpleComponent implements OnInit {
  @Input() list:any=[];
  @Input() title:string='';
  @Output() selectparams:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngchange(event:any){
    this.selectparams.emit(event);
  }

}
