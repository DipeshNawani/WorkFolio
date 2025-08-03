import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-log-task',
  templateUrl: './log-task.component.html',
  styleUrls: ['./log-task.component.css']
})
export class LogTaskComponent implements OnInit {
  tasks: Task[] = [];
  task: Task = {
    subject: '',
    workType: '',
    hours: 0,
    date: '',
    description: ''
  };

  totalHours: number = 0;
  workTypeTotals: { [key: string]: number } = {};
  subjectTotals: { [key: string]: number } = {};
  filter = {
    search: '',
    subject: '',
    workType: '',
    fromDate: '',
    toDate: ''
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.calculateSummaries();
    });
  }

  addTask(): void {
    if (!this.task.subject || !this.task.workType || !this.task.hours || !this.task.date) return;

    this.taskService.addTask({ ...this.task });
    this.task = {
      subject: '',
      workType: '',
      hours: 0,
      date: '',
      description: ''
    };
  }

  calculateSummaries(): void {
    this.totalHours = 0;
    this.workTypeTotals = {};
    this.subjectTotals = {};

    for (const task of this.tasks) {
      this.totalHours += task.hours;

      if (!this.workTypeTotals[task.workType]) {
        this.workTypeTotals[task.workType] = 0;
      }
      this.workTypeTotals[task.workType] += task.hours;

      if (!this.subjectTotals[task.subject]) {
        this.subjectTotals[task.subject] = 0;
      }
      this.subjectTotals[task.subject] += task.hours;
    }
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
