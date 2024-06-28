// import { Injectable } from '@angular/core';
//  import { HttpClient } from '@angular/common/http';
//  import { Observable } from 'rxjs';

//  @Injectable({
//   providedIn: 'root'
//  })
//  export class DashboardConfigService {
//    private configUrl = 'assets/dashboard-config.json';

//  constructor(private http: HttpClient) { }

//   getConfig(): Observable<any> {
//     return this.http.get(this.configUrl);
//   }

//  }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DashboardConfigService {
//   private configUrl = 'http://localhost:3000/charts';

//   constructor(private http: HttpClient) {}

//   getConfig(): Observable<any[]> {
//     return this.http.get<any[]>(this.configUrl);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, forkJoin } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class DashboardConfigService {
//   private configUrl = 'http://localhost:3000/charts';
//   isLoading:boolean =true;

//   constructor(private http: HttpClient) {}

//   getConfig(): Observable<any> {
//     return this.http.get<any[]>(this.configUrl).pipe(
      
//       switchMap(charts => {
//         console.log(charts);
//         const dataRequests = charts.map(chart =>
//           this.http.get(chart.dataApi).pipe(
//             map(data => ({
//               ...chart,
//               data
             
//             }))
//           )
//         );
//         console.log(dataRequests);
//         return forkJoin(dataRequests);
//       }),
//       map(forkJoin => forkJoin as any[])
//     );
//   }
// }

//   import { Injectable } from '@angular/core';
//   import { HttpClient } from '@angular/common/http';
//   import { Observable, forkJoin } from 'rxjs';
//   import { map } from 'rxjs/operators';

//   @Injectable({
//    providedIn: 'root'
//   })
//   export class DashboardConfigService {
//     private configUrl =  'https://localhost:7014/api/Dashboard';
//     private dataUrl =   'https://localhost:7014/api/Dashboard';
//     constructor(private http: HttpClient) {}

//    getConfig(): Observable<any[]> {
//       return forkJoin({
//         configs: this.http.get<any[]>(this.configUrl),
//         data: this.http.get<any[]>(this.dataUrl)
//       }).pipe(
//        map(results => {
//          const configs = results.configs;
//          const data = results.data;
//           configs.forEach(config => {
//             config.data = data.find(d => d.id === config.dataId);
//          });
//           return configs;
//        })
//      );
//   }
// }

// chart.model.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Dataset {
  id: number;
  labels: string;
  data: number[];
  backgroundColor: string[];
}

export interface Chart {
  id: number;
  positionRow: number;
  positionCol: number;
  chartType: string;
  sizeRows: number;
  sizeCols: number;
  dataId: number;
  data: {
    id: number;
    labels: string[];
    datasets: Dataset[];
  };
} // Define Chart model as per your needs

@Injectable({
  providedIn: 'root'
})
export class DashboardConfigService {
  private apiUrl = 'https://localhost:7234/api/Dashboard'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getCharts(): Observable<Chart[]> {
    return this.http.get<Chart[]>(`${this.apiUrl}`);
  }

  getChart(id: number): Observable<Chart> {
    return this.http.get<Chart>(`${this.apiUrl}/${id}`);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DashboardConfigService {
//   private configUrl = 'https://localhost:7014/api/Charts'; // Update with your .NET API endpoint

//   constructor(private http: HttpClient) {}

//   getConfigFromApi(): Observable<any[]> {
//     return this.http.get<any[]>(this.configUrl);
//   }
// }

