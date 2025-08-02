import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {

  constructor(private router: Router) {}

  // goToSalary(): void {
  //   this.router.navigate(['/admin/salary']);
  // }

  goToSalary(): void {
  console.log('Navigating to salary');
  this.router.navigate(['/admin/salary']);
}


  goToReport(): void {
    this.router.navigate(['/admin/report']);
  }
}
