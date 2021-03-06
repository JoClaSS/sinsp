import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogNewsatComponent } from './dialog-newsat/dialog-newsat.component';
import { DialogEditsatComponent } from './dialog-editsat/dialog-editsat.component';
import { Satellite } from 'src/app/shared/model/satellite.model';
import { SatelliteService } from 'src/app/shared/service/satellite.service';
import { ProfilesService } from '../shared/service/profiles.service';


@Component({
  selector: 'app-settingspage',
  templateUrl: './settingspage.component.html',
  styleUrls: ['./settingspage.component.css']
})
export class SettingspageComponent implements OnInit {
  satArray: Satellite[] = [];
  displayedColumns: string[] = ['id', 'name', 'active','responsible'];
  constructor(public dialog: MatDialog,
              public service: SatelliteService,
              public servicepro: ProfilesService
    ){}
  ngOnInit(): void {
    this.showSatellite();
  }

  showSatellite(){
    this.service.getSatelliteArray().subscribe((dados:Satellite[])=> {
      this.satArray = dados;
      console.log(dados[0].responsible);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNewsatComponent, {
      width: '290px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //Depois que for encerrado deve salvar
    });
  }

     openNewDialog(): void {
      const dialogRef = this.dialog.open(DialogEditsatComponent, {
        width: '300px',
        height: '400px'
      });

     }



}

