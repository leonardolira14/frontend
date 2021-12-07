
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detallecosto',
  templateUrl: './detallecosto.component.html',
  styleUrls: ['./detallecosto.component.scss']
})
export class DetallecostoComponent implements OnInit, AfterViewInit {
  @ViewChild('grafics') grafics: any;
  array = [{
    Title: 'Contenido',
    constent: [{
      label: 'Importación',
      text: 'SI'
    },
    ],
    FechaEdicion: '17-05-2012'
  },
  {
    Title: 'Empaque',
    constent: [{
      label: 'Envase',
      text: 'Bolsa 1'
    },
    {
      label: 'Tapa',
      text: 'NA'
    },
    {
      label: 'Etiqueta 1',
      text: 'Etiqueta Tamaño 1'
    },
    {
      label: 'Etiqueta 2',
      text: 'Etiqueta Tamaño 2'
    },
    {
      label: 'Empaque secudario',
      text: 'Caja de 12'
    },
    {
      label: 'Empaque terciario',
      text: 'Palet 12 '
    }],
    FechaEdicion: '17-05-2012'
  },
  {
    Title: 'Generales',
    constent: [{
      label: 'Agua ',
      text: 'SI'
    },
    {
      label: 'LUZ',
      text: 'SI'
    },
    {
      label: 'Renta',
      text: 'SI'
    },
    {
      label: 'Personal',
      text: 'SI'
    }],

    FechaEdicion: '17-05-2012'
  }
  ];
  array2 = [{
    Title: 'Sal Rosa',
    constent: [{
      label: 'Código Producto',
      text: '010123X1'
    },
    {
      label: 'Gramaje',
      text: '10.2 gr'
    },
    {
      label: 'Coste/Gramo',
      text: '1.05 MXN'
    },
    {
      label: 'Coste Total',
      text: '10.05 MXN'
    },
    {
      label: 'Proveedor',
      text: 'Pepito Perez'
    },
    ],
    FechaEdicion: '17-05-2012'
  },
  {
    Title: 'Importacion',
    constent: [],
    FechaEdicion: '17-05-2012'
  }
  ];
  dataGraphic1 = [
    {
      label: ['Contenido', 'Empaque', 'Contend'],
      dataset: [
        { data: [[3, 5], [12, 6], [2, 9]], label: 'Producto', backgroundColor: '#3582De' }
      ]
    },
    {
      label: ['Sal Rosa', 'Importacion'],
      dataset: [
        { data: [[3, 5], [12, 6],], label: 'Contenido', backgroundColor: '#3582De' }
      ]
    }
  ];
  constructor() {

  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.grafics.DataSet = this.dataGraphic1[0].dataset;
    this.grafics.Label = this.dataGraphic1[0].label;

  }
  cardClin() {
    this.grafics.DataSet = this.dataGraphic1[1].dataset;
    this.grafics.Label = this.dataGraphic1[1].label;
    this.array = this.array2;
  }
}
