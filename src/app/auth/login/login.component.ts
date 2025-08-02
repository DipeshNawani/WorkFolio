import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  returnUrl: string = '/dashboard';

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Get return url from route parameters or default to '/dashboard'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    
    const { email, password } = this.loginForm.value;
    
    if (this.authService.login(email, password)) {
      // Login successful
      this.router.navigateByUrl(this.returnUrl);
    } else {
      // Login failed
      this.errorMessage = 'Invalid email or password or no user found. Please register first.';
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    alert('Forgot password functionality not implemented.');
  }
}
