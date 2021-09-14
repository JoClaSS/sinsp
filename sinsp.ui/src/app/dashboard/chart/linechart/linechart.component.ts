import { getLocaleDayPeriods } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {  Color, Label } from 'ng2-charts';
import { Measures } from 'src/app/shared/model/measures.model';
import { MeasuresService } from 'src/app/shared/service/measures.service';
import { map } from 'rxjs/operators'
import { Satellite } from 'src/app/shared/model/satellite.model';
import { Modules } from 'src/app/shared/model/modules.model';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  measuresArray: Measures[] = []
  meany!: any;
  measures!: Measures
  dataArray: number[] = [] ;
  label: string[] = [];

  @Input() satArray:Satellite[] = [];
  @Input() modArray:Modules[] = [];
  constructor(public serviceMea: MeasuresService,
    ) {}

    ngOnInit(): void {
      this.showTochart();
    }

  showMeasures(){
      this.serviceMea.getMeasures()
    .subscribe(event => {
      let result = event.map((s:any)=> {return s.sample})
      let label = event.map((s:any)=> {return s.sample_time})
      this.dataArray = result
      this.label = label
      console.log(this.label);
      this.ChartData = [
        {data: this.dataArray, label: 'Voltage', fill: false }
      ];
      this.ChartLabels = this.label;
    });
  }


  showTochart(){
    this.serviceMea.getChart('Solar Panel X axis voltage','PostTest')
  .subscribe(event => {
    let result = event.map((s:any)=> {return s.sample})
    let label = event.map((s:any)=> {return s.sample_time})
    this.dataArray = result
    this.label = label
    console.log(this.label);
    this.ChartData = [
      {data: this.dataArray, label: 'Voltage', fill: false }
    ];
    this.ChartLabels = this.label;
  });
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
        ticks: {
          fontSize: 6
      },
        scaleLabel: {
         display: false,
         labelString: "Time",
        },
       },
      ],
     }
  };
  ChartLabels: Label[] = this.label;
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
