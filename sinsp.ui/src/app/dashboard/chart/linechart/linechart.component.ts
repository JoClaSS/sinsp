import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {  Color, Label } from 'ng2-charts';
import { Measures } from 'src/app/shared/model/measures.model';
import { MeasuresService } from 'src/app/shared/service/measures.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  measuresArray: Measures[] = []
  meany: any = [];
  measures!: Measures
  dataArray!: number[] 
  constructor(public serviceMea: MeasuresService,
    ) {}

  showMeasures(){
    this.serviceMea.getMeasures()
    .subscribe(dados  => {
     this.measuresArray = dados;
     console.log(this.meany);
     });
  }


  ngOnInit(): void {
    this.showMeasures();
  }
  
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
  ChartLabels: Label[] = ['1', '2', '3', '4', '5'];
  ChartType: ChartType = 'line';
  ChartLegend = true;
  ChartPlugins = [];

  ChartData: ChartDataSets[] = [
    { data: this.dataArray, label: 'Voltage', fill: false }
  ];
  
  ChartColors: Color[] = [
    {
      borderColor: 'green'
    }];



}
