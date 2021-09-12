import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logs } from '../model/logs.model';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  apiUrl = 'http://localhost:8080/logs';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
     private httpClient: HttpClient
  ) { }

  public getLogsPage(){
    return this.httpClient.get<Logs[]>(this.apiUrl);
  }
}