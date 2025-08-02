import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';



@NgModule({
  declarations: [
    LoginComponent,
    AdminSignInComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminAuthModule { }
