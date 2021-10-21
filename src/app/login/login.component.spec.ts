import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../Services/auth.service';

import { LoginComponent } from './login.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // let AuthServiceStub: Partial<AuthService>;
  
  //   AuthServiceStub={
  //     _reg: {  Id:'R123',
  //   Name: 'Test',
  //   UserName: 'Test',
  //   Password: 'Test',
  //   GaurdianType: '',
  //   GaurdianName: 'Test',
  //   Address: 'Tets',
  //   Citizenship: 'sds',  
  //   Country: 1,
  //   State: 1,
  //   EmailAddress: 'as@er.com',
  //   Gender: 'M',
  //   MaritalStatus: 'M',
  //   ContactNo: 9930882824,
  //   DOB: '12/12/1982',
  //   RegDate: '12/12/2020',
  //   AccountType: 'S',
  //   CitizenStatus: 'M',
  //   InitialDepAmt: '20000',
  //   IDProofType: 'P',
  //   IDDocNo: '1234',
  //   RefAccholderName: 'Test',
  //   RefAccholderNo: 'Test',
  //   RefAccholderAddress: 'Test' },

  //   }

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
       RouterTestingModule,
       HttpClientTestingModule,
       ToastrModule.forRoot(),  
       MatFormFieldModule ,
        MatInputModule ,
        MatButtonModule ,
        MatCardModule ,
        MatToolbarModule ,
        BrowserAnimationsModule 
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
