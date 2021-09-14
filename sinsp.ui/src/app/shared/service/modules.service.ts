import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profiles } from '../model/profiles.model'
import { map } from 'rxjs/operators';
import { Modules } from '../model/modules.model'

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  apiUrl = 'http://localhost:8080/modules';
  EPSchart = 'http://localhost:8080/modules/dialog?module=EPS&mclass=sensor';
  constructor(
    private httpClient: HttpClient
 ) { }

 public getAllModules(){
   return this.httpClient.get<Modules[]>(this.apiUrl);
 }


 public getEPSModules(){
  return this.httpClient.get<Modules[]>(this.EPSchart);
}
}
