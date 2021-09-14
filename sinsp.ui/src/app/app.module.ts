import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { ChartsModule } from 'ng2-charts'; //
import { HomepageComponent } from './homepage/homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SettingspageComponent } from './settingspage/settingspage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import{ MatCardModule } from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogNewsatComponent } from './settingspage/dialog-newsat/dialog-newsat.component';
import {MatSelectModule} from '@angular/material/select';
import { DialogEditsatComponent } from './settingspage/dialog-editsat/dialog-editsat.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './dashboard/chart/chart.component';
import { LinechartComponent } from './dashboard/chart/linechart/linechart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { SatelliteService } from './shared/service/satellite.service';
import {MatTableModule} from '@angular/material/table';
import { LayoutComponent } from './layout/layout.component';
import { ProfilesService } from './shared/service/profiles.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogEPS1Component } from './dashboard/dialogs/dialog-eps1/dialog-eps1.component';
import { ResponsibleComponent } from './responsible/responsible.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SettingspageComponent,
    LoginpageComponent,
    DialogNewsatComponent,
    DialogEditsatComponent,
    ChartComponent,
    DashboardComponent,
    LinechartComponent,
    LayoutComponent,
    DialogEPS1Component,
    ResponsibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    ChartsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    NgxPaginationModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [SatelliteService,
    ProfilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
