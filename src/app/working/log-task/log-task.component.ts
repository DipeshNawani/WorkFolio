import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-log-task',
  templateUrl: './log-task.component.html',
  styleUrls: ['./log-task.component.css']
})
export class LogTaskComponent implements OnInit {
  Object = Object;

  task: Task = { subject: '', workType: '', hours: 0, date: '', description: '' };
  tasks: Task[] = [];

  filter = {
    search: '',
    subject: '',
    workType: '',
    fromDate: '',
    toDate: ''
  };

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // Subscribe to task updates
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

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
    
    // Use the task service to add the task
    this.taskService.addTask({ ...this.task });
    
    // Reset the form
    this.task = { subject: '', workType: '', hours: 0, date: '', description: '' };
  }
}
