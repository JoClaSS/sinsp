import { Component, Input, OnInit } from '@angular/core';
import { Profiles } from '../shared/model/profiles.model';

@Component({
  selector: 'app-responsible',
  templateUrl: './responsible.component.html',
  styleUrls: ['./responsible.component.css']
})
export class ResponsibleComponent implements OnInit {
  @Input() responsibleList:Profiles[] = [];
   name!:string;
   
  constructor() { }

  ngOnInit(): void {
  }

}
