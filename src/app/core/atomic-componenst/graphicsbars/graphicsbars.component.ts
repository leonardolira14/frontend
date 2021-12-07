import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graphicsbars',
  templateUrl: './graphicsbars.component.html',
  styleUrls: ['./graphicsbars.component.scss']
})
export class GraphicsbarsComponent implements OnInit {
  @Input() Title = '';
  @Input() Label:any = [];
  @Input() DataSet:any = [];
  @Input() lgenda: boolean = false;

  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: this.lgenda
   },
    scales: {
      xAxes: [{
        display: true,

      }],
      yAxes: [{
        display: true,

      }],
    }
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];


  constructor() { }

  ngOnInit(): void {
  }

}
