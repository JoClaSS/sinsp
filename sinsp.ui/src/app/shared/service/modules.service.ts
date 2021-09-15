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
  EPSstatus = 'http://localhost:8080/modules/dialog?module=EPS&mclass=status';
  EPSnumber = 'http://localhost:8080/modules/dialogNot?module=EPS';
  findModule = 'http://localhost:8080/modules/findModule?description=';
  constructor(
    private httpClient: HttpClient
 ) { }

 public getAllModules(){
   return this.httpClient.get<Modules[]>(this.apiUrl);
 }


 public getEPSsensor(){
  return this.httpClient.get<Modules[]>(this.EPSchart);
}

public getEPSstatus(){
  return this.httpClient.get<Modules[]>(this.EPSstatus);
}


public getEPSnumber(){
  return this.httpClient.get<Modules[]>(this.EPSnumber);
}

public getOneModule(description:string){
  return this.httpClient.get<any>(this.findModule+description);
}

}
