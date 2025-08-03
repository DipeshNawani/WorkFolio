import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalTasks: number = 0;
  totalHours: number = 0.0;
  activeSubjects: number = 0;
  userName: string = '';
  userProfileImage: string | null = null;
  recentTasks: Task[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    // Get user data
    const user = this.authService.currentUserValue;

    if (user) {
      if (user.name) {
        this.userName = user.name;
      } else if (user.email) {
        this.userName = user.email.split('@')[0];
      } else {
        this.userName = localStorage.getItem('loggedInUsername') || 'User';
      }

      if (user.profileImage) {
        this.userProfileImage = user.profileImage;
      }
    }

    // Subscribe to task updates
    this.taskService.getTasks().subscribe(() => {
      const stats = this.taskService.getTaskStats();
      this.totalTasks = stats.totalTasks;
      this.totalHours = stats.totalHours;
      this.activeSubjects = stats.activeSubjects;
      this.recentTasks = stats.recentTasks;
    });
  }

  logFirstTask(): void {
    this.router.navigate(['/log-task']);
  }

  navigateToTab(tab: string): void {
    this.router.navigate([tab]);
  }

  logout(): void {
    this.authService.logout();
  }
}
