import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalTasks: number = 0;
  totalHours: number = 0.0;
  activeSubjects: number = 0;
  
  constructor() {}

  logFirstTask() {
    console.log('Log first task clicked');
  }

  navigateToTab(tab: string) {
    console.log('Navigate to:', tab);
  }
}