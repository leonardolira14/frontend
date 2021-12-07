import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
  @Input() buttonmasdetalle:boolean= false;
  @Input() buttoneditar:boolean  =false;
  @Input() editable:boolean =false;
  @Input() resumen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
