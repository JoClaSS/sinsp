import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profiles } from '../model/profiles.model'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  apiUrl = 'http://localhost:8080/profiles';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
     private httpClient: HttpClient
  ) { }

  public getProfilesByNumber(idP:number){
    return this.httpClient.get<Profiles[]>(this.apiUrl)
    .pipe(
      map((profiles: Profiles[]) => profiles.filter(p => p.id === idP))
    );
  }

  public getProfilesArray(){
    return this.httpClient.get<Profiles[]>(this.apiUrl);
  }
}
