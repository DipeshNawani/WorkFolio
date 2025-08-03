import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  totalTasks: number = 0;
  totalHours: number = 0;
  activeSubjects: number = 0;
  workTypeDistribution: Record<string, number> = {};
  subjectDistribution: Record<string, number> = {};
  recentTasks: Task[] = [];
  
  // For chart display
  workTypeLabels: string[] = [];
  workTypeData: number[] = [];
  subjectLabels: string[] = [];
  subjectData: number[] = [];
  
  // For progress tracking
  weeklyGoal: number = 40; // 40 hours per week goal
  weeklyProgress: number = 0;
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Subscribe to task updates
    this.taskService.getTasks().subscribe(tasks => {
      this.fetchAnalyticsData();
    });
    
    // Initial data fetch
    this.fetchAnalyticsData();
  }

  fetchAnalyticsData(): void {
    const stats = this.taskService.getTaskStats();
    
    this.totalTasks = stats.totalTasks;
    this.totalHours = stats.totalHours;
    this.activeSubjects = stats.activeSubjects;
    this.workTypeDistribution = stats.workTypeDistribution;
    this.subjectDistribution = stats.subjectDistribution;
    this.recentTasks = stats.recentTasks;
    
    // Calculate weekly progress (assuming all tasks are within current week for simplicity)
    this.weeklyProgress = (this.totalHours / this.weeklyGoal) * 100;
    
    // Prepare chart data
    this.prepareChartData();
  }
  
  prepareChartData(): void {
    // Work type distribution
    this.workTypeLabels = Object.keys(this.workTypeDistribution);
    this.workTypeData = this.workTypeLabels.map(label => this.workTypeDistribution[label]);
    
    // Subject distribution
    this.subjectLabels = Object.keys(this.subjectDistribution);
    this.subjectData = this.subjectLabels.map(label => this.subjectDistribution[label]);
  }
  
  getProgressColor(): string {
    if (this.weeklyProgress < 30) return '#ef4444'; // Red
    if (this.weeklyProgress < 70) return '#f59e0b'; // Amber
    return '#10b981'; // Green
  }
}
