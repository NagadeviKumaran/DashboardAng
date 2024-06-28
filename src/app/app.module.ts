import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardConfigService } from './dashboard-config.service';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    ChartModule,
    MatGridListModule,
    FlexLayoutServerModule,
    MatProgressSpinnerModule,
   
  
  ],
  providers: [  provideClientHydration(),DashboardConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
