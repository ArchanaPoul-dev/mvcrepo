import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanapplicationComponent } from './loanapplication/loanapplication.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'registration/:uname',component:RegistrationComponent,
    canActivate:[AuthGuard]},
    {
      path:'loan/:uname',
      component:LoanapplicationComponent,
      canActivate:[AuthGuard]
     },
    {path:'dashboard',component:DashboardComponent},
    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
