import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  totalTasks: number = 0;
  totalHours: number = 0;
  activeSubjects: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.fetchAnalyticsData();
  }

  fetchAnalyticsData(): void {
    // Mock values (replace with actual service call in future)
    this.totalTasks = 12;
    this.totalHours = 34.5;
    this.activeSubjects = 4;
  }
}
