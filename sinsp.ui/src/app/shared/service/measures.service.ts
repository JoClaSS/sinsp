import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,NgZone } from '@angular/core';
import { Observable } from 'rxjs';
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
     private httpClient: HttpClient,
     private _zone: NgZone
  ) { }

  public getMeasures(): Observable<any>{
    return this.httpClient.get<Measures>(this.apiUrl);
   }

   getServerSentEvent(): Observable<any> {
    return new Observable(observer => {
      const eventSource = this.getEventSource(this.apiUrl);
      eventSource.onmessage = event => {
        this._zone.run(() => {
          observer.next(event);
        });
      };
      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }
  private getEventSource(url: string): EventSource {
    return new EventSource(url);
  }
}
