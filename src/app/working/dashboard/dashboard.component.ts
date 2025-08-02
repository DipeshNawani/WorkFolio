import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalTasks: number = 0;
  totalHours: number = 0.0;
  activeSubjects: number = 0;
  username: string = ''; // NEW: holds the logged-in user's name

  constructor(private router: Router) {}

  ngOnInit() {
    this.username = localStorage.getItem('loggedInUsername') || 'User';
  }

  logFirstTask() {
    console.log('Log first task clicked');
    this.router.navigate(['/log-task']);
  }

  navigateToTab(tab: string) {
    console.log('Navigate to:', tab);
  }
}
