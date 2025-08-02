import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LogTaskComponent } from './log-task/log-task.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // ✅ Add this if it's missing

@NgModule({
  declarations: [
    DashboardComponent,
    LogTaskComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class WorkingModule { }
