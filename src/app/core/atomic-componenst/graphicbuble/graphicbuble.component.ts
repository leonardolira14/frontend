import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphicbuble',
  templateUrl: './graphicbuble.component.html',
  styleUrls: ['./graphicbuble.component.scss']
})
export class GraphicbubleComponent implements OnInit {
  @ViewChild('myChart')  myChart:any;
  @Input() Title:string ='Precio Venta Cliente VS Volumen Venta';
  @Input() resumen:boolean = true;
  public scatterChartOptions:ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    plugins: {

    },
    tooltips:{
      callbacks: {
        label: function(t:any, d:any) {
          return d.datasets[t.datasetIndex].label +
            ': (Day:' + t.xLabel + ', Total:' + t.yLabel + ')';
        }
      }
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Precio Venta'
        },
        gridLines: {
          display: true,
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Volumen Venta'
        },
        gridLines: {
          display: true,
        }

      }]
    },
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 ,r:10},
        { x: 2, y: 3,r:10 },
        { x: 20, y: 30,r:10 },

      ],
      label: 'Series A',

    },
  ];
  public scatterChartType: ChartType = 'bubble';

  constructor() { }

  ngOnInit(): void {
  }

  chartClicked(e:any): void {

  }
}
