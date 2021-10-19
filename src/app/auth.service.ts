import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,  } from 'rxjs';
import { Loan } from './loan';
import { Login } from './login';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  private _registerUrl="https://localhost:44388/api/registration";  
  //private _AuthenticationUrl="https://localhost:44388/api/Login/GetbyUserName?username= ";
  private _AuthenticationUrl="https://localhost:44388/api/Login/GetbyUserName";
  private _loanUrl="https://localhost:44388/api/Loan/LoanApplication";
 private uname=new Subject<string>();
 uname$=this.uname.asObservable();

  constructor(private _http:HttpClient) { }

  registerUser(_reg: any):Observable<Registration>{
    console.log("entered auth- registerUser ");     
    console.log(_reg);
    return this._http.post<Registration>(this._registerUrl,_reg)
  };

  sendmessage(message:string){
    this.uname.next(message);
  }

  AuthenticateUser(_user:Login):Observable<any>{
    console.log("entered auth- AuthenticateUser ");      
    //return this._http.get(this._AuthenticationUrl + _user.UserName + '&password='+ _user.Password);  
    return this._http.post(this._AuthenticationUrl ,_user);
  };

  ApplyLoan(_loan:Loan):Observable<any>{
    console.log("entered auth- ApplyLoan ");      
    return this._http.post(this._loanUrl,_loan);
  };

 

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
}
