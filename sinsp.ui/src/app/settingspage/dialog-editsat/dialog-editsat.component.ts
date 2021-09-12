import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Satellite } from 'src/app/shared/model/satellite.model';
import { SatelliteService } from 'src/app/shared/service/satellite.service';
import { ProfilesService } from 'src/app/shared/service/profiles.service';
import { Profiles } from 'src/app/shared/model/profiles.model';


@Component({
  selector: 'app-dialog-editsat',
  templateUrl: './dialog-editsat.component.html',
  styleUrls: ['./dialog-editsat.component.css']
})
export class DialogEditsatComponent implements OnInit {
  satArray: Satellite[] | undefined;
  profilesArray: Profiles[] | undefined;
  satellites: Satellite[] = [];
  model:Profiles[] = [];
  public satEditform!: FormGroup;


  constructor(public dialogReff: MatDialogRef<DialogEditsatComponent>,
              public servicesat: SatelliteService,
              public servicepro: ProfilesService,
              private fb: FormBuilder
    ) { 
  }
  cancel(): void {
    this.dialogReff.close();
  }

  showSatellite(){
    this.servicesat.getSatelliteArray().subscribe(dados=> {
      this.satArray = dados;
      console.log(dados);
    })
  }

  showProfiles(){
    this.servicepro.getProfilesArray().subscribe(dados=> {
      this.profilesArray = dados;
      console.log(dados);
    })
  }

  save(): void {
    const formValue = this.satEditform.value;
    console.log(formValue);
    this.servicesat.postSatellite(formValue).subscribe(data => {
    this.satellites.push(data);})
    this.dialogReff.close();
    this.satEditform.reset();
  }

  formulario(){
    this.satEditform = this.fb.group({
      id: ['', [Validators.required]],
      satellite_name: ['', [Validators.required]],
      active: ['', [Validators.required]],
      responsible_id: this.fb.array ([''
      ])
    });
  }

  ngOnInit(): void {
   this.showSatellite();
   this.showProfiles();
   this.formulario();
 }

 select(value:any){
   console.log(value)
 }

}
