import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModulesService } from 'src/app/shared/service/modules.service';
import { SatelliteService } from 'src/app/shared/service/satellite.service';
import { Satellite } from 'src/app/shared/model/satellite.model';
import { Modules } from 'src/app/shared/model/modules.model';


@Component({
  selector: 'app-dialog-eps1',
  templateUrl: './dialog-eps1.component.html',
  styleUrls: ['./dialog-eps1.component.css']
})
export class DialogEPS1Component implements OnInit {
  public chartEpsForm!:FormGroup
  satArray: Satellite[] = [];
  modArray: Modules[] = [];
  sendTochart:any;
  //@Output() Event: EventEmitter<string> = new EventEmitter();
  constructor(public dialogRefEPS1: MatDialogRef<DialogEPS1Component>,
                  private fb: FormBuilder,
                  public servicesat: SatelliteService,
                  public servicemod: ModulesService
    ) { }

  ngOnInit(): void {
    this.showModules();
    this.showSatellite();
    this.Form();
  }

  cancel(): void {
    this.dialogRefEPS1.close();
  }

  showSatellite(){
    this.servicesat.getSatelliteActiveArray().subscribe(dados=> {
      this.satArray = dados;
      console.log(dados);
    })
  }

  showModules(){
    this.servicemod.getEPSModules().subscribe(dados=> {
      this.modArray = dados;
      console.log(dados);
    }) 
  }

    Form(){
      this.chartEpsForm = this.fb.group({
        satellite_name: ['', [Validators.required]],
        moduledescription: ['', [Validators.required]]
      });
      }
  }


