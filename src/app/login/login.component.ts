import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder) { }

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

  console.log("Entered onLogin");
  console.log(this.loginform.value);
}

  

}
