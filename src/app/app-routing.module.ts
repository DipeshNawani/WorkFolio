import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminWorkComponent } from './admin-lookup/admin-work/admin-work.component';
import { SalaryComponent } from './admin-lookup/salary/salary.component';
import { ReportComponent } from './admin-lookup/report/report.component';
import { MemberInfoComponent } from './admin-lookup/member-info/member-info.component';

import { DashboardComponent } from './working/dashboard/dashboard.component';
import { AnalyticsComponent } from './working/analytics/analytics.component';
import { LogTaskComponent } from './working/log-task/log-task.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminSignInComponent } from './admin-auth/admin-sign-in/admin-sign-in.component';

const routes: Routes = [
  // Default
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-sign-in', component: AdminSignInComponent },

  // Admin-related routes
  { path: 'admin', component: AdminWorkComponent },
  { path: 'admin/salary', component: SalaryComponent },
  { path: 'admin/report', component: ReportComponent },
  { path: 'admin/member/:id', component: MemberInfoComponent },

  // User side
  { path: 'dashboard', component: DashboardComponent },
  { path: 'log-task', component: LogTaskComponent },
  { path: 'analytics', component: AnalyticsComponent },

  // Wildcard fallback
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
