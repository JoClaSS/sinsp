import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DialogEPS1Component } from './dialogs/dialog-eps1/dialog-eps1.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    
}

openDialog(): void {
  const dialogRef = this.dialog.open(DialogEPS1Component, {
    width: '290px',
    height: '400px'
  });
}
}