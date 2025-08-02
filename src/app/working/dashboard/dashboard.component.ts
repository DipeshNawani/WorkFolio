import { Component, OnInit } from '@angular/core';
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
  
  constructor(private authService: AuthService) {}

  logFirstTask() {
    console.log('Log first task clicked');
  }

  ngOnInit() {
    // Get user data from auth service
    const user = this.authService.currentUserValue;
    if (user && user.name) {
      this.userName = user.name;
    } else if (user && user.email) {
      // If name is not available, use email as fallback
      this.userName = user.email.split('@')[0];
    }
  }

  navigateToTab(tab: string) {
    console.log('Navigate to:', tab);
  }

  logout() {
    this.authService.logout();
  }
}