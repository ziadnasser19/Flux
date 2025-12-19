import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { IUser } from '../../models/iuser';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './signup.html',
  styleUrl: '../login/login.scss', // Ensure it points to login.scss
})
export class Signup {
  passwordType: 'password' | 'text' = 'password';
  confirmPasswordType: 'password' | 'text' = 'password'; // New state
  errorMessage: string = '';

  constructor(private authService: Auth, private router: Router) {}

  togglePassword(field: 'main' | 'confirm') {
    if (field === 'main') {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    } else {
      this.confirmPasswordType = this.confirmPasswordType === 'password' ? 'text' : 'password';
    }
  }

  onSignup(fullName: string, emailVal: string, passVal: string, confirmPassVal: string) {
    this.errorMessage = '';

    // 1. Validation
    if (!fullName || !emailVal || !passVal || !confirmPassVal) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    if (passVal !== confirmPassVal) {
      this.errorMessage = "Passwords don't match.";
      return;
    }

    const nameParts = fullName.trim().split(' ');
    const newUser: IUser = {
      id: '',
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      email: emailVal,
      password: passVal,
    };

    // 2. Register
    const isRegistered = this.authService.register(newUser);

    if (isRegistered) {
      alert('Account created successfully! Please login now.');
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'This email is already registered.';
    }
  }

  showAlert() {
    alert('Google Sign-Up is coming soon!');
  }
}
