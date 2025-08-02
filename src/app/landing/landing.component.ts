import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  navigateToAdminLogin(): void {
    this.router.navigate(['/admin-sign-in']);
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  navigateToLogTask(): void {
    this.router.navigate(['/log-task']);
  }

  navigateToAnalytics(): void {
    this.router.navigate(['/analytics']);
  }

  // Generic navigation method that can be used for any feature
  navigateToFeature(feature: string): void {
    switch(feature) {
      case 'timeTracking':
        this.navigateToLogTask();
        break;
      case 'analytics':
        this.navigateToAnalytics();
        break;
      case 'insights':
      case 'subjectManagement':
      default:
        this.navigateToDashboard();
        break;
    }
  }
}
