import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Satellite } from '../model/satellite.model';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {

  apiUrl = 'http://localhost:8080/satellites';
  satActive = 'http://localhost:8080/satellites/active';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
     private httpClient: HttpClient
  ) { }

  public getSatelliteArray(){
    return this.httpClient.get<Satellite[]>(this.apiUrl);
  }

  public getSatelliteActiveArray(){
    return this.httpClient.get<Satellite[]>(this.satActive);
  }

  public postSatellite(newSat:Satellite): Observable<Satellite>{
    return this.httpClient.post<Satellite>(this.apiUrl,newSat,this.httpOptions);
  }
}
