import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Measures } from '../model/measures.model';

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {

  apiUrl = 'http://localhost:8080/measures';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
     private httpClient: HttpClient
  ) { }

  public getMeasures(){
    return this.httpClient.get<Measures[]>(this.apiUrl);
  }
}
