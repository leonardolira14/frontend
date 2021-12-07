import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-graphicmultipie',
  templateUrl: './graphicmultipie.component.html',
  styleUrls: ['./graphicmultipie.component.scss']
})
export class GraphicmultipieComponent implements OnInit {
  @Input() gr:boolean = false;
  @Input() title: string ='';
  public doughnutChartLabels =  ['Margen LIFO', 'Margen Maximo', 'Margen Medio'];
  public doughnutChartData = [
    {
      backgroundColor: ['#fff', '#F7941D'],
      data: [21, 79]
    },
    {
      backgroundColor: ['#fff', '#BF1E2E'],
      data: [33, 67]
    },
    {
      backgroundColor: ['#fff', '#10E0D0'],
      data: [20, 80]
    },
    {
      backgroundColor: ['#fff', '#01FF70'],
      data: [10, 90]
    }
  ];
  public doughnutChartType:ChartType = 'pie';
  public options:ChartOptions = {
    responsive: true,
    legend: {
      display: false
   },
  }
  constructor() { }

  ngOnInit(): void {
  }

}
