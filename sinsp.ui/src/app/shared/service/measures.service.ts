import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Measures } from '../model/measures.model';

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {

  apiUrl = 'http://localhost:8080/measures';
  EPSchart = 'http://localhost:8080/measures/chart';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
     private httpClient: HttpClient,
     private _zone: NgZone
  ) { }

  public getMeasures(): Observable<any>{
    return this.httpClient.get<Measures>(this.apiUrl);
   }

   public getChart(description:string,satellite:string): Observable<any>{
    return this.httpClient.get<Measures>(this.EPSchart+
        '?module=EPS'+ 
        '&description=' + description + 
        '&satellite=' + satellite);
   }

   

}
