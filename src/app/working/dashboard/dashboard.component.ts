import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
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

  logFirstTask() {
    this.router.navigate(['log-task']);
  }

  ngOnInit() {
    // Get user data from auth service
    const user = this.authService.currentUserValue;
    if (user) {
      if (user.name) {
        this.userName = user.name;
      } else if (user.email) {
        // If name is not available, use email as fallback
        this.userName = user.email.split('@')[0];
      }
      
      // Get profile image if available
      if (user.profileImage) {
        this.userProfileImage = user.profileImage;
      }
    }

    // Subscribe to task updates
    this.taskService.getTasks().subscribe(tasks => {
      const stats = this.taskService.getTaskStats();
      this.totalTasks = stats.totalTasks;
      this.totalHours = stats.totalHours;
      this.activeSubjects = stats.activeSubjects;
      this.recentTasks = stats.recentTasks;
    });
  }

  navigateToTab(tab: string) {
    this.router.navigate([tab]);
  }

  logout() {
    this.authService.logout();
  }
}