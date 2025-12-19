import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common'; // For ngIf, etc.

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule], // Add CommonModule
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  constructor(private router: Router) {} // Inject Router

  goHome() {
    this.router.navigate(['/']); // Navigate programmatically
  }
}
