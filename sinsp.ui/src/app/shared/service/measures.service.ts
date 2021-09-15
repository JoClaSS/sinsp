import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Measures } from '../model/measures.model';
import { ResponsePageable } from '../model/ResponsePageable.model';



@Injectable({
  providedIn: 'root'
})
export class MeasuresService {

  apiUrl = 'http://localhost:8080/measures';
  EPSchart = 'http://localhost:8080/measures/chart';
  EPSchartPage = 'http://localhost:8080/measures/Page100';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
     private httpClient: HttpClient
  ) { }

  public getMeasures(): Observable<any>{
    return this.httpClient.get<Measures>(this.apiUrl);
   }

   public getChart(description:string,satellite:string): Observable<any>{
    return this.httpClient.get<any>(this.EPSchart+
        '?module=EPS'+ 
        '&description=' + description + 
        '&satellite=' + satellite);
   }

   public getChartPage(description:string,satellite:string): Observable<ResponsePageable>{
    return this.httpClient.get<any>(this.EPSchart+
        '?module=EPS'+ 
        '&description=' + description + 
        '&satellite=' + satellite);
   }
   

}
