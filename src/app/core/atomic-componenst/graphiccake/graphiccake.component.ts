import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-graphiccake',
  templateUrl: './graphiccake.component.html',
  styleUrls: ['./graphiccake.component.scss']
})
export class GraphiccakeComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,

  };
  public pieChartLabels: Label[] = [['Agua'], ['Luz'], 'Logistica','Gas','Renta','Personal'];
  public pieChartData: SingleDataSet = [30, 10, 20,5,12,23];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {

   }

  ngOnInit(): void {
  }

}
