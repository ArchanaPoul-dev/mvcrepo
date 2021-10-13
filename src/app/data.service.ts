import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';
import { Countries } from './countries';
import { States } from './states';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private countriesUrl = 'assets/countriesList.json';
  private statesUrl='assets/statesList.json';
  constructor(private http: HttpClient) { 
  }

  getall():any
    {    

      return this.http.get<any>(this.countriesUrl);
    }
    getallStates():any
    {
      return this.http.get<any>(this.statesUrl);
    }
}
