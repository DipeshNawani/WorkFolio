import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient // ✅ inject HttpClient
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;

    this.http.get<any>('assets/admin.json').subscribe(
      admin => {
        if (username === admin.username && password === admin.password) {
          alert('Admin login successful!');
          this.router.navigate(['/admin']); // ✅ redirect to AdminWorkComponent
        } else {
          this.errorMessage = 'Invalid admin credentials.';
        }
      },
      error => {
        this.errorMessage = 'Error loading admin credentials.';
        console.error('Error fetching admin.json:', error);
      }
    );
  }
}