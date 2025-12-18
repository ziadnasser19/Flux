import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { IUser } from '../../models/iuser';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  imports: [RouterLink, CommonModule], // Add CommonModule here
  templateUrl: './signup.html',
  styleUrl: '../login/login.scss',
})
export class Signup {
  constructor(private authService: Auth, private router: Router) {}
  errorMessage: string = '';
  onSignup(fullName: string, emailVal: string, passVal: string) {
    this.errorMessage = ''; // Reset error

    // 1. Basic Validation: Check if fields are empty
    if (!fullName || !emailVal || !passVal) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }
    const nameParts = fullName.trim().split(' ');
    const newUser: IUser = {
      id: crypto.randomUUID(),
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      email: emailVal,
      password: passVal,
    };

    // 2. Call Service and check if successful
    const isRegistered = this.authService.register(newUser);

    if (isRegistered) {
      alert('Account created successfully! Please login now.');

      // Success: Navigate to login
      this.router.navigate(['/login']);
    } else {
      // Failure: Email exists
      this.errorMessage = 'This email is already registered.';
    }
  }
}
