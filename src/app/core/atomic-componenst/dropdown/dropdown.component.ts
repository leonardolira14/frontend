import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
@Input() Titulo:string = '';
@Input() toppingList:string[] = ['Sales','Especies','Agua','Cerveza'];

toppings = new FormControl();


  constructor() { }

  ngOnInit(): void {
  }

}
