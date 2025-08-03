import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../services/task.service'; // Use consistent service

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  // Summary cards
  totalTasks: number = 0;
  totalHours: number = 0;
  activeSubjects: number = 0;

  // Distribution
  workTypeDistribution: Record<string, number> = {};
  subjectDistribution: Record<string, number> = {};

  // Charts
  workTypeLabels: string[] = [];
  workTypeData: number[] = [];
  subjectLabels: string[] = [];
  subjectData: number[] = [];

  // Weekly progress
  weeklyGoal: number = 40;
  weeklyProgress: number = 0;

  // Recent activities
  recentTasks: Task[] = [];

  // Subject analytics table
  subjects: { name: string; hours: number; taskCount: number }[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(() => {
      this.fetchAnalyticsData();
    });

    // Initial fetch
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

    this.weeklyProgress = (this.totalHours / this.weeklyGoal) * 100;
    this.prepareChartData();
    this.prepareSubjectTable();
  }

  prepareChartData(): void {
    this.workTypeLabels = Object.keys(this.workTypeDistribution);
    this.workTypeData = this.workTypeLabels.map(label => this.workTypeDistribution[label]);

    this.subjectLabels = Object.keys(this.subjectDistribution);
    this.subjectData = this.subjectLabels.map(label => this.subjectDistribution[label]);
  }

  prepareSubjectTable(): void {
    this.subjects = this.subjectLabels.map((name, i) => ({
      name,
      hours: this.subjectDistribution[name],
      taskCount: this.taskService.getTaskCountBySubject(name)
    }));
  }

  getProgressColor(): string {
    if (this.weeklyProgress < 30) return '#ef4444'; // Red
    if (this.weeklyProgress < 70) return '#f59e0b'; // Amber
    return '#10b981'; // Green
  }
}
