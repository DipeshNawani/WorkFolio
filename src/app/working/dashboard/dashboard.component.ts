import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalTasks: number = 0;
  totalHours: number = 0.0;
  activeSubjects: number = 0;
  userName: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Get user data from AuthService
    const user = this.authService.currentUserValue;

    if (user && user.name) {
      this.userName = user.name;
    } else if (user && user.email) {
      // Fallback: extract name from email
      this.userName = user.email.split('@')[0];
    } else {
      // Final fallback if no user info
      this.userName = localStorage.getItem('loggedInUsername') || 'User';
    }
  }

  logFirstTask() {
    console.log('Log first task clicked');
    this.router.navigate(['/log-task']);
  }

  navigateToTab(tab: string) {
    console.log('Navigate to:', tab);
  }

  logout() {
    this.authService.logout();
  }
}
