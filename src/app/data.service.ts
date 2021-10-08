import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';
import { Countries } from './countries';
import { States } from './states';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  countries: Countries[] = [
    {Id: '1', Name: 'India'},
    {Id: '2', Name: 'UK'}
  ];

  states: States[] = [
    {Id: '1', Name: 'Maharashtra',countryid:1},
    {Id: '2', Name: 'Gujarat',countryid:1}
  ];
  constructor(private http: HttpClient) { 
  }

  getall():any
    {
      return this.countries;
    }
    getallStates():any
    {
      return this.states;
    }
}
