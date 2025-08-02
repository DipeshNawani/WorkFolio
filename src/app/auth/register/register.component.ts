import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
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

      localStorage.setItem('userData', JSON.stringify(this.registerForm.value));
      alert('Registration successful!');
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }
}
