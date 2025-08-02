import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogTaskComponent } from './log-task/log-task.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LogTaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkingModule { }
