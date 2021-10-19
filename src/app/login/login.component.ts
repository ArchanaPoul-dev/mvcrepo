import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  submitted = false;
  isAuthenticated: Observable<boolean>;
  isSubmitting = false;
  @Output() uname: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder, private router: Router, private _auth: AuthService,
    private _toastr: ToasterService) {

  }

  ngOnInit() {

    this.loginform = this.fb.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]]

    })
    console.log(this.loginform);
  }



  onLogin() {
    this.isSubmitting = true;
    // stop here if form is invalid
    if (this.loginform.invalid) {
      return;
    }
    console.log("Entered onLogin");
    console.log(this.loginform.value);

    this._auth.AuthenticateUser(this.loginform.value)
      .subscribe(
        res => {
          //this.isAuthenticated=true
          //this.uname.emit(this.loginform.get("username")?.value);
          this._auth.sendmessage(this.loginform.get("username")?.value);
          localStorage.setItem('token', res.token)
          this._toastr.success("User Logged In Successfully");
          this.router.navigate(['/dashboard'])
          this.isSubmitting = false;
          console.log(res)
        },
        err => {
          this._toastr.error("LogIn failed");
          console.log(err),
            this.isSubmitting = false;
        }
      )

  }

}
