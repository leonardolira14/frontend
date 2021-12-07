import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-graphicline',
  templateUrl: './graphicline.component.html',
  styleUrls: ['./graphicline.component.scss']
})
export class GraphiclineComponent implements OnInit {
  @Input() title:string ='';

  @Input() gr  = false;
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78], label: 'Crude oil prices'},
  ];

  lineChartData2: ChartDataSets[] = [
    { data: [85, 72, 78], label: 'Crude oil prices',showLine:false,pointBackgroundColor:'#87g8f4',pointRadius:8 },
  ];

  lineChartLabels: Label[] = ['Ene', 'Feb', 'Mar'];

  lineChartOptions:ChartOptions = {
    responsive:true,
maintainAspectRatio: false,
legend: {
  display: false
},
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255,255,255,0.1)',

    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType:ChartType = 'line';
  constructor() { }

  ngOnInit(): void {
  }

}
