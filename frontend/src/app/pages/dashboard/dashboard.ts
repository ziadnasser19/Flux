import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  constructor(public authService: Auth) {}
  ngOnInit() {
    // 1. Check the currently logged-in user
    console.log('--- Auth Check ---');
    console.log('Current User Object:', this.authService.currentUser);

    // 2. Check the full list of users (to see if the new one was added)
    console.log('All Users in Memory:', this.authService.users);
  }
}
