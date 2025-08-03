import { Component, OnInit } from '@angular/core';
import { LogTaskService, Task } from '../services/log-task.service';

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

  constructor(private logTaskService: LogTaskService) {}

  ngOnInit(): void {
    this.tasks = this.logTaskService.getTasks();
    this.calculateSummaries();

      this.tasks = this.logTaskService.getTasks();
  }

  addTask() {
    if (!this.task.subject || !this.task.workType || !this.task.hours || !this.task.date) return;

    const newTask = { ...this.task }; // Clone task
    this.tasks.push(newTask);
    this.logTaskService.setTasks(this.tasks);
    this.resetTask();
    this.calculateSummaries();
  }

  resetTask() {
    this.task = {
      subject: '',
      workType: '',
      hours: 0,
      date: '',
      description: ''
    };
  }

  calculateSummaries() {
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

  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}
