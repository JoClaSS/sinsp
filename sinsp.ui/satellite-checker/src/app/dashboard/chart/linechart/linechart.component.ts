import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {  Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
 dataArray = [3, 3, 3.5, 4, 4, 4, 4, 3.5, 4, 4.5, 5, 4.4, 4, 4, 3.5, 4,4, 4, 4,5];
 dataGain:any = this.dataArray.map(x => x * 1);
  ChartOptions: ChartOptions = {
    title:{
      text:'DATA Output - Output 6',
      fontSize: 8,
      display:true
    },
    responsive: true,
    scales: {
      yAxes: [
       {
        display: true,
        scaleLabel: {
         display: false,
         labelString: "Ampere",
        },
       },
      ],
      xAxes: [
       {
        scaleLabel: {
         display: false,
         labelString: "Time",
        },
       },
      ],
     }
  };
  ChartLabels: Label[] = ['1', '2', '3', '4', '5', '6','7','8','9','10', '11', '12', '13', '14', '15', '16','17','18','19','20'];
  ChartType: ChartType = 'line';
  ChartLegend = true;
  ChartPlugins = [];

  ChartData: ChartDataSets[] = [
    { data: this.dataGain, label: 'Voltage', fill: false }
  ];
  
  ChartColors: Color[] = [
    {
      borderColor: 'green'
    }];
  constructor() { }

  ngOnInit(): void {
  }



}
