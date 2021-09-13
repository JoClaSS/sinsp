import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-eps1',
  templateUrl: './dialog-eps1.component.html',
  styleUrls: ['./dialog-eps1.component.css']
})
export class DialogEPS1Component implements OnInit {

  constructor(public dialogRefEPS1: MatDialogRef<DialogEPS1Component>) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRefEPS1.close();
  }

}
