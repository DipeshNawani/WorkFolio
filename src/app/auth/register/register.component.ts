import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      university: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { password, confirmPassword } = this.registerForm.value;
      if (password !== confirmPassword) {
        this.errorMessage = "Passwords do not match!";
        return;
      }

      // Register user using the auth service
      const user = {
        name: `${this.registerForm.value.fname} ${this.registerForm.value.lname}`,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };
      
      this.authService.register(user);
      alert('Registration successful!');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }
}
