import { Component, Input, OnInit, Output } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {  Color, Label } from 'ng2-charts';
import { Measures } from 'src/app/shared/model/measures.model';
import { MeasuresService } from 'src/app/shared/service/measures.service';
import { map } from 'rxjs/operators'
import { Satellite } from 'src/app/shared/model/satellite.model';
import { Modules } from 'src/app/shared/model/modules.model';
import { SatelliteService } from 'src/app/shared/service/satellite.service';
import { ModulesService } from 'src/app/shared/service/modules.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  public chartEpsForm!:FormGroup
  measuresArray: Measures[] = []


  //chart
  dimen!:string
  measureType!:string;
  dataArray: number[] = [] ;
  title!:string;
  label: string[] = [];
  satArray: Satellite[] = [];
  modArray: Modules[] = [];

  constructor(public serviceMea: MeasuresService,
              private fb: FormBuilder,
              public servicesat: SatelliteService,
              public servicemod: ModulesService
    ) {}

    ngOnInit(): void {
      this.Form();
      this.showModules();
      this.showSatellite();

      console.log(this.satArray);
    }

// Mostra a lista de satélites
    showSatellite(){
      this.servicesat.getSatelliteActiveArray().subscribe(dados=> {
        this.satArray = dados;
        console.log(dados);
      })
    }

//Mostra a lista de módulos EPS Sensor
  
    showModules(){
      this.servicemod.getEPSModules().subscribe(dados=> {
        this.modArray = dados;
        console.log(dados);
      }) 
    }

//Vai pro gráfico
Submit(){
  const formValue = this.chartEpsForm.value;
  console.log(formValue);
  this.serviceMea.getChart(formValue.moduledescription,formValue.satellite_name).subscribe(event => {
    let result = event.map((s:any)=> {return s.sample})
    let label = event.map((s:any)=> {return s.sample_time})
    this.dataArray = result
    this.label = label
   // console.log(this.label);
    this.ChartData = [
      {data: this.dataArray, label: this.measureType, fill: false }
    ];
    this.ChartLabels = this.label;
  });

  this.servicemod.getOneModule(formValue.moduledescription).subscribe(dados => {
    this.title = dados.map((m:any)=> {return m.moduledescription})
    this.measureType = dados.map((m:any)=> {return m.measuretype})
    this.dimen = dados.map((m:any)=> {return m.dimension})
    console.log(dados);
    this.ChartOptions= {
      title:{
        text:formValue.satellite_name + '   ' + this.title,
        fontSize: 8,
        display:true
      },
      responsive: true,
      scales: {
        yAxes: [
         {
          display: true,
          scaleLabel: {
           display: true,
           labelString: this.dimen,
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
  });
}

Form(){
  this.chartEpsForm = this.fb.group({
    satellite_name: ['', [Validators.required]],
    moduledescription: ['', [Validators.required]],
    pagination: ['', [Validators.required]]
  });
  }

  
  ChartOptions: ChartOptions = {
    title:{
      text:'EPS',
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
    { data: this.dataArray, label: 'Type', fill: false }
  ];
  
  ChartColors: Color[] = [
    {
      borderColor: 'green'
    }];



}


/*
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
} */