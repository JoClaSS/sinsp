import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {  Color, Label } from 'ng2-charts';
import { Measures } from 'src/app/shared/model/measures.model';
import { MeasuresService } from 'src/app/shared/service/measures.service';
import { map } from 'rxjs/operators'

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
  constructor(public serviceMea: MeasuresService,
    ) {}

  showMeasures(){
      this.serviceMea.getMeasures()
    //.pipe(map(s=> {return s.sample}))
    .subscribe(event => {
      let result = event.map((s:any)=> {return s.sample})
      this.dataArray = result
      console.log(result);
      this.ChartData = [
        { data: this.dataArray, label: 'Voltage', fill: false }
      ];
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
  ChartLabels: Label[] = [];
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
function sample(sample: any) {
  throw new Error('Function not implemented.');
}

/*
showMeasures(){
  this.serviceMea.getServerSentEvent()
.subscribe(event => {
  let sample = JSON.parse(event.sample);
  this.pushEventToChartData(sample);
});
}

private pushEventToChartData(event: Measures) {
  if (this.isChartDataFull(this.ChartData, 20)) {
    this.removeLastElementFromChartDataAndLabel();
  }
  this.ChartData[0].data!.push(event.sample);
  this.ChartLabels.push(
    this.getLabel(event)
  );}

  private getLabel(event: Measures): string {
    return `${event.message}`;
  }
  private removeLastElementFromChartDataAndLabel(): void {
    this.ChartData[0].data = this.ChartData[0].data!.slice(1);
    this.ChartLabels = this.ChartLabels.slice(1);
  }
  private isChartDataFull(chartData: ChartDataSets[], limit: number): boolean {
    return chartData[0].data!.length >= limit;
  } */