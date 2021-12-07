import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-graphiccirc',
  templateUrl: './graphiccirc.component.html',
  styleUrls: ['./graphiccirc.component.scss']
})
export class GraphiccircComponent implements OnInit {
  @Input() title:string = '';
  public doughnutChartLabels = ['Sales Q1', ];
  public doughnutChartData = [120,];
  public doughnutChartType:ChartType = 'doughnut';
  public options:ChartOptions = {
    responsive: true,

  }
  ngOnInit(): void {

  }

}
