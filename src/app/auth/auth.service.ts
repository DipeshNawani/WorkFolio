import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  email: string;
  password?: string;
  name?: string;
  profileImage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;

  constructor(private router: Router) {
    // Initialize from localStorage if available
    const storedUser = localStorage.getItem('userData');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
    
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(!!storedUser);
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): boolean {
    const storedUser = localStorage.getItem('userData');

    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        // Update the current user subject
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        return true;
      }
    }
    return false;
  }

  logout(): void {
    // Don't remove from localStorage as we need it for future logins
    // Just update the subjects
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  register(user: User): void {
    // Store user in localStorage
    localStorage.setItem('userData', JSON.stringify(user));
    
    // Update the subjects
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }
}