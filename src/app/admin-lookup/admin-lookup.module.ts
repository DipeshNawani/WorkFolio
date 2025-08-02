import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';
import { ReportComponent } from './report/report.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';



@NgModule({
  declarations: [
    SalaryComponent,
    ReportComponent,
    AdminWorkComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminLookupModule { }
