// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { LogTaskComponent } from './log-task/log-task.component';
// import { AnalyticsComponent } from './analytics/analytics.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// @NgModule({
//   declarations: [
//     // DashboardComponent,
//     LogTaskComponent,
//     AnalyticsComponent
//   ],
//   imports: [
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule
//   ],
//   exports: [
//     LogTaskComponent,
//     AnalyticsComponent
//   ]
// })
// export class WorkingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LogTaskComponent } from './log-task/log-task.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    DashboardComponent, // ✅ Declare here if used only inside WorkingModule
    LogTaskComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    LogTaskComponent,
    AnalyticsComponent
  ]
})
export class WorkingModule { }
