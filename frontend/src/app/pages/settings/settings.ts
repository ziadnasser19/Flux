import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for inputs
import { Auth } from '../../services/auth';
import { IUser } from '../../models/iuser';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings implements OnInit {
  // Clone the user data to avoid modifying the Service directly until "Save" is clicked
  userData: Partial<IUser> = {};

  // Password Field Logic
  passwordFieldType: 'password' | 'text' = 'password';
  confirmPasswordFieldType: 'password' | 'text' = 'password';

  constructor(private auth: Auth) {}

  ngOnInit() {
    if (this.auth.currentUser) {
      // Create a copy of the object
      this.userData = { ...this.auth.currentUser };
    }
  }

  togglePassword(field: 'main' | 'confirm') {
    if (field === 'main') {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    } else {
      this.confirmPasswordFieldType =
        this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
    }
  }

  onUpdate() {
    this.auth.updateProfile(this.userData);
    alert('Profile updated successfully!');
  }
}
