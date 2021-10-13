import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'bankmgmtsystem';
  constructor(private _auth:AuthService){
    
console.log("entered constructor");

  }

  ngOnInit(){
console.log("entered ngOnInit");
  }

  loggedIn()
  {
    return localStorage.getItem('token');
  }

  onLogOut(){
   
    localStorage.clear();
  }

}
