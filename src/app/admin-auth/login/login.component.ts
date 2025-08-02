  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-admin-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent {
    loginForm: FormGroup;
    errorMessage: string = '';

    constructor(private fb: FormBuilder, private router: Router) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    onLogin() {
      const { username, password } = this.loginForm.value;

      if (username === 'admin' && password === 'admin1234') {
        alert('Admin login successful!');
        this.router.navigate(['/admin-dashboard']); 
      } else {
        this.errorMessage = 'Invalid admin credentials.';
      }
    }
  }
