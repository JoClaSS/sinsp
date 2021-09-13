import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Satellite } from 'src/app/shared/model/satellite.model';
import { SatelliteService } from 'src/app/shared/service/satellite.service';

@Component({
  selector: 'app-dialog-newsat',
  templateUrl: './dialog-newsat.component.html',
  styleUrls: ['./dialog-newsat.component.css']
})
export class DialogNewsatComponent implements OnInit {
  public satForm!: FormGroup;
  satellites: Satellite[] = [];


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogNewsatComponent>,
    public service: SatelliteService
    ) {
  }

  cancel(): void {
    this.dialogRef.close();
    this.satForm.reset();
  }

  save(): void {
    const formValue = this.satForm.value;
    console.table(formValue);
    this.service.postSatellite(formValue).subscribe(data => {
    this.satellites.push(data);})
    this.dialogRef.close();
    this.satForm.reset();
  }


  ngOnInit(): void {
    this.satForm = this.fb.group({
      satellite_name: ['', [Validators.required]],
      active: ['false', [Validators.required]],
      responsible: this.fb.array (['1'
       ])
    });
  }


}
