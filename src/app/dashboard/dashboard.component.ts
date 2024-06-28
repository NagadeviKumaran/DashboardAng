// import { Component, OnInit } from '@angular/core';
// import { DashboardConfigService } from '../dashboard-config.service';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   dashboardConfig: any[] = [];

//   constructor(private configService: DashboardConfigService) {}

//   ngOnInit(): void {
//     this.configService.getConfig().subscribe((config: any) => {
//       this.dashboardConfig = config;
//     });
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { DashboardConfigService } from '../dashboard-config.service';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   dashboardConfig: any[] = [];

//   constructor(private configService: DashboardConfigService) {}
//   isLoading:boolean = true;
//   ngOnInit(): void {
//     this.isLoading =true;
//     this.configService.getConfig().subscribe((config: any[]) => {
//       console.log(config);
//       this.dashboardConfig = config;
//     });
//   }
// chart.component.ts
// chart.component.ts
// chart.component.ts

 // dashboard.component.ts

 
import { Component, OnInit } from '@angular/core';
import { DashboardConfigService ,Chart } from '../dashboard-config.service';


@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 charts: Chart[] = [];

 constructor(private configService: DashboardConfigService) { }

 ngOnInit(): void {
   this.getCharts();
 }

 getCharts(): void {
   this.configService.getCharts()
     .subscribe({
       next: (charts) => {
         this.charts = charts;
         console.log(charts); // Debug: Log the retrieved charts
        },
        error: (err) => {
         console.error('Error fetching charts:', err);
        }
      });
 }

getChartData(chart: Chart): any {
  return {
    labels: chart.data.labels,
    datasets: chart.data.datasets.map(dataset => ({
      label: dataset.labels,
      data: dataset.data,
      backgroundColor: dataset.backgroundColor
    }))
       }
     
   };
 }

