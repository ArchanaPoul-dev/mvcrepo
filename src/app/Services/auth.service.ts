import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, } from 'rxjs';
import { Loan } from '../Shared/loan';
import { Login } from '../Shared/login';
import { Registration } from '../Shared/registration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "https://localhost:44388/api/registration/Add";
  private _AuthenticationUrl = "https://localhost:44388/api/Login/GetbyUserName";
  private _loanUrl = "https://localhost:44388/api/Loan/LoanApplication";
  private _editregisterUrl = "https://localhost:44388/api/registration/GetbyUser?uname=";
  private _editregisterUrl1 = "https://localhost:44388/api/registration/getbyId?Id=";
  private _updateregisterUser = "https://localhost:44388/api/registration/Update";
  private RegId = new Subject<string>();
  _RegId$ = this.RegId.asObservable();

  constructor(private _http: HttpClient) { }

  registerUser(_reg: any): Observable<string> {
    console.log("entered auth- registerUser ");
    console.log(_reg);
    return this._http.post<string>(this._registerUrl, _reg)
  };

  sendmessage(message: string) {
    console.log("Registration Id : "+message);
    this.RegId.next(message);
  }

  getregisterUser(uname: string): Observable<any> {
    console.log("entered auth- getregisterUser " + uname);
    return this._http.get(this._editregisterUrl1 + uname);
  }
  AuthenticateUser(_user: Login): Observable<Registration[]> {
    console.log("entered auth- AuthenticateUser ");
    return this._http.post<Registration[]>(this._AuthenticationUrl, _user);
  };

  updateregisterUser(_reg: Registration): Observable<string> {
    console.log("entered auth- updateregisterUser ");
    console.log(_reg);
    return this._http.post<string>(this._updateregisterUser, _reg)
  };

  ApplyLoan(_loan: Loan): Observable<any> {
    console.log("entered auth- ApplyLoan ");
    return this._http.post(this._loanUrl, _loan);
  };

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
