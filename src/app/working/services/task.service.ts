import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  subject: string;
  workType: string;
  hours: number;
  date: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  
  constructor() {
    // Try to load tasks from localStorage on service initialization
    this.loadTasksFromStorage();
  }

  private loadTasksFromStorage(): void {
    const storedTasks = localStorage.getItem('workfolio_tasks');
    if (storedTasks) {
      try {
        this.tasks = JSON.parse(storedTasks);
        this.tasksSubject.next([...this.tasks]);
      } catch (e) {
        console.error('Error loading tasks from storage:', e);
      }
    }
  }

  private saveTasksToStorage(): void {
    localStorage.setItem('workfolio_tasks', JSON.stringify(this.tasks));
  }

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task): void {
    this.tasks.push({...task});
    this.tasksSubject.next([...this.tasks]);
    this.saveTasksToStorage();
  }

  getTaskStats() {
    const totalTasks = this.tasks.length;
    const totalHours = this.tasks.reduce((sum, task) => sum + task.hours, 0);
    
    // Get unique subjects
    const uniqueSubjects = new Set(this.tasks.map(task => task.subject));
    const activeSubjects = uniqueSubjects.size;
    
    // Get work type distribution
    const workTypeDistribution = this.tasks.reduce((acc, task) => {
      acc[task.workType] = (acc[task.workType] || 0) + task.hours;
      return acc;
    }, {} as Record<string, number>);
    
    // Get subject distribution
    const subjectDistribution = this.tasks.reduce((acc, task) => {
      acc[task.subject] = (acc[task.subject] || 0) + task.hours;
      return acc;
    }, {} as Record<string, number>);
    
    return {
      totalTasks,
      totalHours,
      activeSubjects,
      workTypeDistribution,
      subjectDistribution,
      recentTasks: this.tasks.slice(-5).reverse() // Get 5 most recent tasks
    };
  }

  clearTasks(): void {
    this.tasks = [];
    this.tasksSubject.next([]);
    this.saveTasksToStorage();
  }
}