import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    SalaryComponent,
    ReportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminLookupModule { }
