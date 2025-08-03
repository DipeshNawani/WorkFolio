import { Component, OnInit } from '@angular/core';
import { LogTaskService, Task } from '../services/log-task.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  tasks: Task[] = [];
  totalHours: number = 0;
  subjects: { name: string; hours: number; taskCount: number }[] = [];

  constructor(private logTaskService: LogTaskService) {}

  ngOnInit(): void {
    this.tasks = this.logTaskService.getTasks();
    this.calculateAnalytics();
  }

  calculateAnalytics(): void {
    const subjectMap: { [key: string]: { hours: number; taskCount: number } } = {};

    this.totalHours = this.tasks.reduce((sum, task) => sum + task.hours, 0);

    for (let task of this.tasks) {
      if (!subjectMap[task.subject]) {
        subjectMap[task.subject] = { hours: 0, taskCount: 0 };
      }
      subjectMap[task.subject].hours += task.hours;
      subjectMap[task.subject].taskCount += 1;
    }

    this.subjects = Object.entries(subjectMap).map(([name, data]) => ({
      name,
      hours: data.hours,
      taskCount: data.taskCount,
    }));
  }
}
