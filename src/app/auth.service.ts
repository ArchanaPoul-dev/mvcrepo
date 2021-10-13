import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 //isAuthenticated:Observable<boolean>;
  user:any[];
  private _registerUrl="";
  
  private _loginUrl="";

  constructor(private _http:HttpClient) { }

  // registerUser(user){
  //   return this._http.post<any>(this._registerUrl,user)
  // };

  loginUser(user:any[]){
    console.log("entered auth- loginUser ");
  
    return this._http.post<any>(this._loginUrl,user)
    
  };

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
}
