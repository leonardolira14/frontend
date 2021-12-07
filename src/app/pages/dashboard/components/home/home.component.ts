import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lis_clientes = [
    {
      Name:'cliente 1',
    },
    {
      Name:'cliente 2',
    },
    {
      Name:'cliente 3',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  selectcliente(event:any){
    console.log(event);
  }

}
