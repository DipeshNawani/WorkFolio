import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './working/dashboard/dashboard.component';
import { AnalyticsComponent } from './working/analytics/analytics.component';
import { LogTaskComponent } from './working/log-task/log-task.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminSignInComponent } from './admin-auth/admin-sign-in/admin-sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-sign-in', component: AdminSignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'log-task', component: LogTaskComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
