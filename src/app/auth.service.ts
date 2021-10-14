import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';
import { Login } from './login';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  //reg:Registration;
  private _registerUrl="https://localhost:44388/api/registration";  
  private _loginUrl="https://localhost:44388/api/Login/GetAll";
  constructor(private _http:HttpClient) { }

  registerUser(reg: any):Observable<Registration>{
    console.log(reg);
    return this._http.post<Registration>(this._registerUrl,reg)
  };

  loginUser(user:any):Observable<Login>{
    console.log("entered auth- loginUser ");  
    return this._http.post<Login>(this._loginUrl,user)
    
  };

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
}
