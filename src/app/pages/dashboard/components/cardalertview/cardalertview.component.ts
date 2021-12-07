import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardalertview',
  templateUrl: './cardalertview.component.html',
  styleUrls: ['./cardalertview.component.scss']
})
export class CardalertviewComponent implements OnInit {
  alert=[
    {
        title:'Alerta de Coste',
        id:'0',
        precio:'Maximo',
        tipo:'Sal',
        MarkUp:'10.50%',
        FechaEdit:'05-12-2012',
        fabricacion:'Fabricacion',
        type:'coste'
    },
    {
      title:'Alerta de Coste',
      id:'0',
      precio:'Maximo',
      tipo:'Sal',
      MarkUp:'10.50%',
      FechaEdit:'05-12-2012',
      fabricacion:'Fabricacion',
      type:'coste'
  },
  {
    title:'Alerta de Coste',
    id:'0',

    precio:'Maximo',
    tipo:'Sal',
    MarkUp:'10.50%',
    FechaEdit:'05-12-2012',
    fabricacion:'Fabricacion',
    type:'coste'
}
,
  {
    title:'Alerta de Competencia',
    id:'0',
    precio:'Maximo',
    tipo:'Sal',
    MarkUp:'10.50%',
    FechaEdit:'05-12-2012',
    fabricacion:'Distribución',
    type:'compe'
}
,
  {
    title:'Alerta de Competencia',
    id:'0',
    precio:'Maximo',
    tipo:'Sal',
    MarkUp:'10.50%',
    FechaEdit:'05-12-2012',
    fabricacion:'Distribución',
    type:'compe'
}
]
  constructor() { }

  ngOnInit(): void {
  }

}
