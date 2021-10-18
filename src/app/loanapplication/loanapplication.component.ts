import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { DataService } from '../data.service';
import { roival } from '../enum';
@Component({
  selector: 'app-loanapplication',
  templateUrl: './loanapplication.component.html',
  styleUrls: ['./loanapplication.component.css']
})
export class LoanapplicationComponent implements OnInit {
  loanform!: FormGroup;
  showeduloandetails = false;
  showhomeloandetails = false;
  myDate = new Date();
 
 
  constructor(private fb: FormBuilder, private router: Router, private dt: DataService,private _auth: AuthService) {
    
  }

  ngOnInit(): void {

    this.loanform = this.fb.group({
      loantype: [null, [Validators.required]],
      loanamt: [null, Validators.required],
      loanapplydate: [null, [Validators.required,this.dateRangeValidator]],
      loanissuedate: [null, Validators.required],
      roi: [{value:null,disabled: true}, Validators.required],
      duration: [null, Validators.required],
      coursefees: [null],
      course: [null],
      fathername: [null],
      fatheroccupation: [''],
      fatherexp: [null],
      fexpcurrentcmpny: [null],
      rationcardno: [null],
      annualincome: [null, Validators.required],
      companyname: [null],
      designation: [null],
      totalexp: [null],
      expwithcurcmpny: [null]
    })
    console.log(this.loanform);
  }
  onloansubmit() {   
      console.log("Entered onloansubmit");
      console.log(this.loanform.value);
      this._auth.ApplyLoan(this.loanform.value)
        .subscribe(
          res => {           
            //this.router.navigate(['/login'])
            console.log(res)
          },
          err => { console.log(err) }
        )
  }
  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {
    let invalid = false;
    const _loanapplydate = this.loanform && this.loanform.get("loanapplydate")?.value;

    invalid = (new Date(_loanapplydate).valueOf()) > new Date(this.myDate).valueOf();
    console.log("Invalid Date : "+ invalid);
    return invalid ? { invalidRange: { _loanapplydate } } : null;
  };

  onSelect(e: any) {
    console.log("Entered onselect");
    let loantype = this.loanform.controls['loantype'].value;
    console.log(loantype);

    if (loantype == 'E') {
      this.showeduloandetails = true;
      this.showhomeloandetails = false;
      this.loanform.controls["coursefees"].setValidators([Validators.required]);
      this.loanform.controls["course"].setValidators([Validators.required]);
      this.loanform.controls["fathername"].setValidators([Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$")]);
      this.loanform.controls["fatheroccupation"].setValidators([Validators.required]);
      this.loanform.controls["fatherexp"].setValidators([Validators.required]);
      this.loanform.controls["fexpcurrentcmpny"].setValidators([Validators.required]);
      this.loanform.controls["rationcardno"].setValidators([Validators.required]);
      this.loanform.patchValue({
        roi: roival.Education         
      });

    }
    else {
      this.showhomeloandetails = true;
      this.showeduloandetails = false;
      this.loanform.controls["companyname"].setValidators([Validators.required]);
      this.loanform.controls["designation"].setValidators([Validators.required]);
      this.loanform.controls["totalexp"].setValidators([Validators.required]);
      this.loanform.controls["expwithcurcmpny"].setValidators([Validators.required]);
     
      this.loanform.patchValue({
        roi: roival.Home         
      });

    }

  }

}
