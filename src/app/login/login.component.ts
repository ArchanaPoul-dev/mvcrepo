import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  submitted = false;  
  isAuthenticated:Observable<boolean>;
  constructor(private fb:FormBuilder,private router: Router,private _auth:AuthService) { 
    
  }

  ngOnInit() {
   
this.loginform =this.fb.group({
  username:[null,Validators.required],
password:[null,[Validators.required,Validators.minLength(6)]]

})
console.log(this.loginform); 
}

 

onLogin()
{
   // stop here if form is invalid
   if (this.loginform.invalid) {
    return;
   }
   this.router.navigate(['/loan']);

  console.log("Entered onLogin");
  console.log(this.loginform.value);
  this.router.navigate(['/loan']);
  localStorage.setItem('token','sdsdsdsd') //temp
  // this._auth.loginUser(this.loginform.value)
  // .subscribe(
  //   res =>{
  // this.isAuthenticated=true
  // localStorage.setItem('token',res.token)
  // this.router.navigate(['/loan'])
  // console.log(res)
  // },
  //   err =>console.log(err)
  // )

   this._auth.loginUser(this.loginform.value)
  .subscribe(
    res =>{  
  localStorage.setItem('token',res.token)
  this.router.navigate(['/loan'])
  console.log(res)
  },
    err =>console.log(err)    
  )
  
}

  

}
