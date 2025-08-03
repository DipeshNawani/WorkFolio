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
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;

    // Approach 1: Validate using external JSON file
    this.http.get<any>('assets/admin.json').subscribe(
      admin => {
        if (username === admin.username && password === admin.password) {
          alert('Admin login successful!');
          this.router.navigate(['/admin']);
        } else {
          this.errorMessage = 'Invalid admin credentials.';
        }
      },
      error => {
        console.error('Error fetching admin.json:', error);
        this.errorMessage = 'Error loading admin credentials.';
      }
    );

    // Optional fallback (if needed, comment out above block to use this)
    /*
    if (username === 'admin' && password === 'admin1234') {
      alert('Admin login successful!');
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Invalid admin credentials.';
    }
    */
  }
}
