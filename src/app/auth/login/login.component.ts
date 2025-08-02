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
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    // First, try login via AuthService
    const loginSuccess = this.authService.login(email, password);

    if (loginSuccess) {
      this.router.navigateByUrl(this.returnUrl);
      return;
    }

    // Fallback: Try localStorage check
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        alert('Login successful!');
        localStorage.setItem('loggedInUsername', user.name);
        this.router.navigate(['/landing']);
        return;
      }
    }

    // Login failed
    this.errorMessage = 'Invalid email or password or no user found. Please register first.';
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    alert('Forgot password functionality not implemented.');
  }
}
