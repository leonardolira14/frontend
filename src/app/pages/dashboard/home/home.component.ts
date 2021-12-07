import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecomponentprincipal',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponentprincipal implements OnInit {


  grapchBar = [
    {
      label: ['-9%', '-7%', '-5%', '-3%', '-1%', '1%', '3%', '5%', '7%', '9%'],
      dataset: [{
        data: [5, 4, 5, 8, 5, 2, 5, 7, 5, 9],
        label: 'Contenido',
        backgroundColor: '#3582De',
        showLabelBackdrop:false
      }]
    }
  ];

  circs = [
    {
      data: {
        labels: ['Data1', 'Data2'],
        datasets: [
          {
            data: [55, 45],
            backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.1)'],
            fill: false
          },
        ]
      },
    },
    {
      data: {
        labels: ['Data1', 'Data2'],
        datasets: [
          {
            data: [55, 45],
            backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.1)'],
            fill: false
          },
        ]
      },
    },
    {
      data: {
        labels: ['Data1', 'Data2'],
        datasets: [
          {
            data: [55, 45],
            backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.1)'],
            fill: false
          },
        ]
      },
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
