import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Satellite } from 'src/app/shared/model/satellite.model';
import { SatelliteService } from 'src/app/shared/service/satellite.service';


@Component({
  selector: 'app-dialog-editsat',
  templateUrl: './dialog-editsat.component.html',
  styleUrls: ['./dialog-editsat.component.css']
})
export class DialogEditsatComponent implements OnInit {
  satellite: Satellite | undefined;
  satArray: Satellite[] | undefined;


  constructor(public dialogReff: MatDialogRef<DialogEditsatComponent>,
              public service: SatelliteService
    ) { 
  }
  cancel(): void {
    this.dialogReff.close();
  }

  showSatellite(){
    this.service.getSatelliteArray().subscribe(dados=> {
      this.satArray = dados;
      console.log(dados);
    })
  }

  ngOnInit(): void {
   this.showSatellite();
  }



}
