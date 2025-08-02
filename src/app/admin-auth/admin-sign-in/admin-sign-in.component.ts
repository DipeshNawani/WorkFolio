
// @Component({
//   selector: 'app-admin-sign-in',
//   templateUrl: './admin-sign-in.component.html',
//   styleUrls: ['./admin-sign-in.component.css']
// })
// export class AdminSignInComponent {

// }



import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-in',
templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent {
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