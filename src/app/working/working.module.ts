import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogTaskComponent } from './log-task/log-task.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    LogTaskComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WorkingModule { }
