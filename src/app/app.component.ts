import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'bankmgmtsystem';
  uname:string;
  constructor(private _auth:AuthService,private router: Router){
    
console.log("entered constructor");

  }

  ngOnInit(){
console.log("entered ngOnInit");
this._auth.uname$.subscribe(
  message=>{
this.uname=message;
  }
);
  }

  onRedirect()
  {
    this.router.navigate(['/registration',this.uname])
  }

  unameHandler(uname: string) {
   
    console.log("unameHandler"+uname);
  }

  loggedIn()
  {
    return localStorage.getItem('token');
  }

  onLogOut(){
   
    localStorage.clear();
  }

}
