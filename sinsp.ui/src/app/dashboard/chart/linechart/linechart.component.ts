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
  public NumberEpsForm!:FormGroup
  public BoolEpsForm!:FormGroup
  measuresArray: Measures[] = []


  //chart
  dimen!:string
  measureType!:string;
  dataArray: number[] = [] ;
  title!:string;
  label: string[] = [];
  satArray: Satellite[] = [];
  modArray: Modules[] = [];

  dataStatus!:number
  modArrayStatus: Modules[] = [];
  labelStatus!:string
  titleStatus!:string

  dataNumber!:number
  modArrayNumber: Modules[] = [];
  labelNumber!:string
  titleNumber!:string

  constructor(public serviceMea: MeasuresService,
              private fb: FormBuilder,
              private fb2: FormBuilder,
              private fb3: FormBuilder,
              public servicesat: SatelliteService,
              public servicemod: ModulesService
    ) {}

    ngOnInit(): void {
      this.Form();
      this.showSensor();
      this.showStatus();
      this.showNumber();
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
  
    showSensor(){
      this.servicemod.getEPSsensor().subscribe(dados=> {
        this.modArray = dados;
        console.log(dados);
      }) 
    }

    showStatus(){
      this.servicemod.getEPSstatus().subscribe(dados2=> {
        this.modArrayStatus = dados2;
        console.log(dados2);
      }) 
    }

    showNumber(){
      this.servicemod.getEPSnumber().subscribe(dados3=> {
        this.modArrayNumber = dados3;
        console.log(dados3);
      }) 
    }

//Vai pro gráfico
Submit(){
  const formValue = this.chartEpsForm.value;
  this.serviceMea.getChart(formValue.moduledescription,formValue.satellite_name).subscribe(event => {
    let result = event.map((s:any)=> {return s.sample})  //Eixo Y
    let label = event.map((s:any)=> {return s.sample_time}) //Eixo X
    this.dataArray = result
    this.label = label
   console.log(event);
    this.ChartData = [
      {data: this.dataArray, label: this.measureType, fill: false }
    ];
    this.ChartLabels = this.label;
  });

  this.servicemod.getOneModule(formValue.moduledescription).subscribe(dados => {
    this.title = dados.map((m:any)=> {return m.moduledescription}) //descrição/nome
    this.measureType = dados.map((m:any)=> {return m.measuretype}) //volt, corrente, temperatura
    this.dimen = dados.map((m:any)=> {return m.dimension})   //dimensão
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

Submit2(){
  const formValue = this.NumberEpsForm.value;
  console.log(formValue);
  this.titleNumber = formValue.satellite_name + '/' + formValue.moduledescription
  this.serviceMea.getChart(formValue.moduledescription,formValue.satellite_name).subscribe(event => {
    let size = event.length - 1;
    let result = event.map((s:any)=> {return s.sample})  //Eixo Y
    let label = event.map((s:any)=> {return s.sample_time}) //Eixo X
    this.dataNumber = result[size];
    this.labelNumber = label
    console.log(event);
    console.log(this.dataNumber);
  });
  

}
//Vai pro Bool
Submit3(){
  const formValue = this.BoolEpsForm.value;
  console.log(formValue);
  this.titleStatus = formValue.satellite_name + '/' + formValue.moduledescription
  this.serviceMea.getChart(formValue.moduledescription,formValue.satellite_name).subscribe(event => {
    let size = event.length - 1;
    let result = event.map((s:any)=> {return s.status})  //Eixo Y
    let label = event.map((s:any)=> {return s.sample_time}) //Eixo X
    this.dataStatus = result[size];
    this.labelStatus = label
    console.log(event);
    console.log(this.dataStatus);
  });
}

//Formulários 

Form(){
  this.chartEpsForm = this.fb.group({
    satellite_name: ['', [Validators.required]],
    moduledescription: ['', [Validators.required]],
    pagination: ['', [Validators.required]]
  });

  this.NumberEpsForm = this.fb2.group({
    satellite_name: ['', [Validators.required]],
    moduledescription: ['', [Validators.required]]
  });

  this.BoolEpsForm = this.fb3.group({
    satellite_name: ['', [Validators.required]],
    moduledescription: ['', [Validators.required]]
  });
  }
  

//Chart inicial
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
Submit(){
  const formValue = this.chartEpsForm.value;
  this.serviceMea.getChart(formValue.moduledescription,formValue.satellite_name).subscribe(event => {
    let result = event.map((s:any)=> {return s.sample})  //Eixo Y
    let label = event.map((s:any)=> {return s.sample_time}) //Eixo X
    this.dataArray = result
    this.label = label
   console.log(event);
    this.ChartData = [
      {data: this.dataArray, label: this.measureType, fill: false }
    ];
    this.ChartLabels = this.label;
  });

  this.servicemod.getOneModule(formValue.moduledescription).subscribe(dados => {
    this.title = dados.map((m:any)=> {return m.moduledescription}) //descrição/nome
    this.measureType = dados.map((m:any)=> {return m.measuretype}) //volt, corrente, temperatura
    this.dimen = dados.map((m:any)=> {return m.dimension})   //dimensão
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

Submit2(){
  const formValue = this.NumberEpsForm.value;
  console.log(formValue);
  this.titleNumber = formValue.satellite_name + '/' + formValue.moduledescription
  this.serviceMea.getChart(formValue.moduledescription,formValue.satellite_name).subscribe(event => {
    let size = event.length - 1;
    let result = event.map((s:any)=> {return s.sample})  //Eixo Y
    let label = event.map((s:any)=> {return s.sample_time}) //Eixo X
    this.dataNumber = result[size];
    this.labelNumber = label
    console.log(event);
    console.log(this.dataNumber);
  });
  

}
//Vai pro Bool
Submit3(){
  const formValue = this.BoolEpsForm.value;
  console.log(formValue);
  this.titleStatus = formValue.satellite_name + '/' + formValue.moduledescription
  this.serviceMea.getChart(formValue.moduledescription,formValue.satellite_name).subscribe(event => {
    let size = event.length - 1;
    let result = event.map((s:any)=> {return s.status})  //Eixo Y
    let label = event.map((s:any)=> {return s.sample_time}) //Eixo X
    this.dataStatus = result[size];
    this.labelStatus = label
    console.log(event);
    console.log(this.dataStatus);
  });


*/