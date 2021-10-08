import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { Countries } from '../countries';

import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationform!: FormGroup;
  selectedcountry!: string;
  countries: any[];
  states: any[];
  panelOpenState = false;
  constructor(private fb: FormBuilder, private dt: DataService) {

  }

  ngOnInit(): void {
    this.registrationform = this.fb.group({
      name: [null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$")]],
      username: [null, [Validators.required, Validators.maxLength(10)]],
      password: [null, [Validators.required, Validators.maxLength(10)]],
      gender: [null, [Validators.required]],
      gaurdiantype: [null, Validators.required],
      gaurdianname: [null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$")]],
      address: [null, [Validators.required, Validators.maxLength(50)]],
      citizenship: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      emailaddress: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      maritalstatus: [null, Validators.required],
      contactno: [null, [Validators.required, Validators.minLength(10)]],
      dob: [null, [Validators.required, this.dateRangeValidator]],
      registrationdate: [null, Validators.required],
      accounttype: [null, Validators.required],
      initialdepositamt: [null, Validators.required],
      idprooftype: [null, Validators.required],
      IDdocno: [null, Validators.required],
      refname: [null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$")]],
      refaccno: [null, Validators.required],
      refaddress: [null, Validators.required]
    })
    console.log(this.registrationform);

    this.fillDropdowns();
  }

  fillDropdowns() {
    this.countries = this.dt.getall();
    this.states = this.dt.getallStates();
  }

  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {
    let invalid = false;
    const dob = this.registrationform && this.registrationform.get("dob")?.value;

    invalid = ((new Date(dob).valueOf() > new Date('2003/01/01').valueOf()) || (new Date(dob).valueOf() < new Date('1935/01/01').valueOf()));
    console.log(invalid);
    return invalid ? { invalidRange: { dob } } : null;
  };

  onRegistration() {
    console.log("Entered onRegistration");
    console.log(this.registrationform.value);


  }

}
