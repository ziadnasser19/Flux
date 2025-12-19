import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  passwordType: 'password' | 'text' = 'password';
  errorMessage: string = '';
  constructor(private authService: Auth, private router: Router) {}
  onLogin(emailVal: string, passVal: string) {
    // Check credentials via AuthService
    const isValid = this.authService.validateUser(emailVal, passVal);

    if (isValid) {
      console.log('Logged in as:', this.authService.currentUser?.id); // Trace ID
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }

  togglePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
