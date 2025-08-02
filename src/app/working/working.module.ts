import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // This provides the date pipe
import { LogTaskComponent } from './log-task/log-task.component';
import { FormsModule } from '@angular/forms';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    LogTaskComponent,
    AnalyticsComponent
    // other components like AnalyticsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    // any other modules you need
  ]
})
export class WorkingModule { }
