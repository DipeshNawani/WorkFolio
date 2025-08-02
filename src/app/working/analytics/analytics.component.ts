import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../working/services/dashboard.services';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  subjects: { name: string; hours: number }[] = [];
  totalHours: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.subjectData$.subscribe((data) => {
      this.subjects = data;
      this.totalHours = this.subjects.reduce((sum, s) => sum + s.hours, 0);
    });
  }
}
