import { Component } from '@angular/core';

interface Task {
  subject: string;
  workType: string;
  hours: number;
  date: string;
  description?: string;
}

@Component({
  selector: 'app-log-task',
  templateUrl: './log-task.component.html',
  styleUrls: ['./log-task.component.css']
})
export class LogTaskComponent {
  Object= Object;

  task: Task = { subject: '', workType: '', hours: 0, date: '', description: '' };
  tasks: Task[] = [];

  filter = {
    search: '',
    subject: '',
    workType: '',
    fromDate: '',
    toDate: ''
  };

  get totalHours() {
    return this.tasks.reduce((sum, t) => sum + t.hours, 0);
  }

  get workTypeTotals() {
    const totals: { [type: string]: number } = {};
    for (let task of this.tasks) {
      totals[task.workType] = (totals[task.workType] || 0) + task.hours;
    }
    return totals;
  }

  get subjectTotals() {
    const totals: { [subject: string]: number } = {};
    for (let task of this.tasks) {
      totals[task.subject] = (totals[task.subject] || 0) + task.hours;
    }
    return totals;
  }

  addTask() {
    if (!this.task.subject || !this.task.workType || !this.task.hours || !this.task.date) return;
    this.tasks.push({ ...this.task });
    this.task = { subject: '', workType: '', hours: 0, date: '', description: '' };
  }
}
