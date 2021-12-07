import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  productos = [
    {
      Nombre: 'SAL ROSA DEL HIMALAYA MOLIDO FINO BOLSA 1',
      subtitle:'Alerta por Incompleto',
      classHead:'danger',
      Precio:'',
      MarkUp:'',
      classMarkUp:'danger',
      Label:'',
      Porcentaje:'',
      FechaRegistro:'',
      NobreEditor:''
    },
    {
      Nombre: 'SAL ROSA DEL HIMALAYA MOLIDO FINO BOLSA 1',
      subtitle:'Alerta por Competencia',
      classHead:'danger',
      Precio:'1125.545',
      MarkUp:'12.05%',
      classMarkUp:'danger',
      Label:'Restaurante Buena Vista de lo que sea',
      Porcentaje:'HORECA',
      FechaRegistro:'10/20/2013',
      NobreEditor:'Leonardo Lira'
    },

    {
      Nombre: 'SAL ROSA DEL HIMALAYA MOLIDO FINO BOLSA 1',
      classHead:'danger',
      subtitle:'Alerta por Coste',
      Precio:'1125.545',
      MarkUp:'12.05%',
      classMarkUp:'danger',
      Label:'más caro que la competencia',
      Porcentaje:'10.05%',
      FechaRegistro:'10/20/2013',
      NobreEditor:'Leonardo Lira'
    },


    {
      Nombre: 'SAL ROSA DEL HIMALAYA MOLIDO FINO BOLSA 1',
      classHead:'danger',
      subtitle:'Alerta por Coste',
      Precio:'1125.545',
      MarkUp:'12.05%',
      classMarkUp:'danger',
      Label:'más caro que la competencia',
      Porcentaje:'10.05%',
      FechaRegistro:'10/20/2013',
      NobreEditor:'Leonardo Lira'
    },
    {
      Nombre: 'SAL ROSA DEL HIMALAYA MOLIDO FINO BOLSA 1',
      classHead:'danger',
      subtitle:'Alerta por Coste',
      Precio:'1125.545',
      MarkUp:'12.05%',
      classMarkUp:'danger',
      Label:'más caro que la competencia',
      Porcentaje:'10.05%',
      FechaRegistro:'10/20/2013',
      NobreEditor:'Leonardo Lira'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
