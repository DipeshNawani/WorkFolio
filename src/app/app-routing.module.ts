import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogTaskComponent } from './working/log-task/log-task.component';

const routes: Routes = [
  {
    path:'log-task',
    component:LogTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
