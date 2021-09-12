import { Component, OnInit } from '@angular/core';
import { LogsService } from 'src/app/shared/service/logs.service';
import { Logs } from 'src/app/shared/model/logs.model';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  logsArray:Logs[] = [];
  paginaAtual= 1;
  constructor( public servicelog:LogsService 
  ){ }

  ngOnInit(): void {
    this.getLogs();
  }
  
  getLogs(){
    this.servicelog.getLogsPage().subscribe(dados=> {
      this.logsArray = dados;
      this.paginaAtual = Math.ceil(dados.length/7)
      console.log(this.paginaAtual);
  })
}
}

