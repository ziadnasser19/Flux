import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth); // Injecting your Auth Service
  const router = inject(Router);

  // Check if the user is logged in
  if (authService.currentUser) {
    return true; // Access granted
  } else {
    // Access denied: Redirect to login page
    router.navigate(['/login']);
    return false;
  }
};
