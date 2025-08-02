import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWorkComponent } from './admin-lookup/admin-work/admin-work.component';
import { SalaryComponent } from './admin-lookup/salary/salary.component';
import { ReportComponent } from './admin-lookup/report/report.component';
import { MemberInfoComponent } from './admin-lookup/member-info/member-info.component'; // ✅ Import this

const routes: Routes = [
  { path: 'admin', component: AdminWorkComponent },
  { path: 'admin/salary', component: SalaryComponent },
  { path: 'admin/report', component: ReportComponent },
  { path: 'admin/member/:id', component: MemberInfoComponent }, // ✅ Route to dynamic faculty page
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
