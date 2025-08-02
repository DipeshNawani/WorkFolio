import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './working/dashboard/dashboard.component';
import { AnalyticsComponent } from './working/analytics/analytics.component';
import { LogTaskComponent } from './working/log-task/log-task.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminSignInComponent } from './admin-auth/admin-sign-in/admin-sign-in.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-sign-in', component: AdminSignInComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'log-task', 
    component: LogTaskComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'analytics', 
    component: AnalyticsComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
