import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogTaskComponent } from './working/log-task/log-task.component';
import { AdminSignInComponent } from './admin-auth/admin-sign-in/admin-sign-in.component'; // Make sure this matches your renamed admin login

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/login', component: AdminSignInComponent },
  { path: 'log-task', component: LogTaskComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
