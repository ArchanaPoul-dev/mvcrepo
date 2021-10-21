import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Registration } from '../Shared/registration';

const dummyToken = '2340568t7eriog.jkvfm3456u4390guxcjklfjasdfkl.535636363';

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
  regi: Registration[];

  constructor(private fb: FormBuilder, private router: Router, private _auth: AuthService,
    private _toastr: ToastrService) {

  }
  Success() {
    this._toastr.success('User Logged In Successfully ');
  }

  error() {
    this._toastr.error('User Logged In Failed ');
  }
  info() {
    this._toastr.info('Information');
  }

  ngOnInit() {
    this.loginform = this.fb.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]]

    })
    console.log(this.loginform);
  }

  onLogin() {
    console.log("Entered onLogin");
    this.isSubmitting = true;
    // stop here if form is invalid
    if (this.loginform.invalid) {
      return;
    }
    console.log(this.loginform.value);
    this._auth.AuthenticateUser(this.loginform.value)
      .subscribe(
        res => {
          this.regi = res;
          console.log("-" + this.regi[0].Id)
          this._auth.sendmessage(this.regi[0].Id);
          localStorage.setItem('token', dummyToken)
          //res.Token
          this.Success();
          this.router.navigate(['/dashboard'])
          this.isSubmitting = false;

        },
        err => {
          this.error();
          console.log(err);
          this.isSubmitting = false;
        }
      )
  }
}
