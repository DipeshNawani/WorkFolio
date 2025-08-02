import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/log-task/task';

@Component({
  selector: 'app-log-task',
  templateUrl: './log-task.component.html',
  styleUrls: ['./log-task.component.css']
})
export class LogTaskComponent implements OnInit {
  objectKeys = Object.keys;
  task: Task = {
    subject: '',
    workType: 'Lecture',
    hours: 0,
    date: '',
    description: ''
  };

  tasks: Task[] = [];
  totalHours: number = 0;
  workTypeTotals: Record<string, number> = {};
  subjectTotals: Record<string, number> = {};

  filter = {
    search: '',
    subject: '',
    workType: '',
    fromDate: '',
    toDate: ''
  };

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      this.updateSummaries();
    }
  }

  addTask() {
    if (!this.task.subject || !this.task.hours || !this.task.date || !this.task.workType) return;

    this.tasks.push({ ...this.task });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.updateSummaries();

    this.task = {
      subject: '',
      workType: 'Lecture',
      hours: 0,
      date: '',
      description: ''
    };
  }

  updateSummaries() {
    this.totalHours = this.tasks.reduce((acc, t) => acc + t.hours, 0);

    this.workTypeTotals = {};
    this.subjectTotals = {};

    for (let t of this.tasks) {
      this.workTypeTotals[t.workType] = (this.workTypeTotals[t.workType] || 0) + t.hours;
      this.subjectTotals[t.subject] = (this.subjectTotals[t.subject] || 0) + t.hours;
    }
  }
}
