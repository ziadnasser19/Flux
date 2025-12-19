import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router, RouterLink, NavigationEnd } from '@angular/router'; // Import NavigationEnd
import { filter } from 'rxjs/operators'; // Import filter

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // 1. Variable to track state
  isSearchActive: boolean = false;
  isProfileMenuOpen: boolean = false; // New State
  pageTitle: string = 'Dashboard';

  // 2. Reference to the input element in HTML (look for #searchInput)
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(public auth: Auth, private router: Router) {}

  ngOnInit() {
    // 1. Set initial title based on current URL
    this.updateTitle(this.router.url);

    // 2. Listen for page changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateTitle(event.urlAfterRedirects || event.url);
      });
  }

  // Helper function to map URLs to Titles
  private updateTitle(url: string) {
    if (url.includes('/dashboard')) this.pageTitle = 'Dashboard';
    else if (url.includes('/transactions')) this.pageTitle = 'Transactions';
    else if (url.includes('/wallets')) this.pageTitle = 'My Wallets';
    else if (url.includes('/settings')) this.pageTitle = 'Settings';
    else if (url.includes('/planning')) this.pageTitle = 'Planning';
    else this.pageTitle = 'Dashboard'; // Default
  }
  // Logic for clicking the magnifying glass
  toggleSearch(event: Event) {
    event.stopPropagation(); // Stop click from reaching document (which would close it)
    this.isSearchActive = !this.isSearchActive;

    if (this.isSearchActive) {
      // Focus the input. setTimeout ensures the class is applied/element is visible first
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
      }, 100);
    } else {
      this.searchInput.nativeElement.value = ''; // Clear value on close
    }
  }

  // Logic to prevent closing when clicking inside the box
  onBoxClick(event: Event) {
    event.stopPropagation();
  }

  toggleProfileMenu(event: Event) {
    event.stopPropagation();
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  onLogout() {
    if (confirm('Are you sure you want to logout?')) {
      this.auth.logout();
      this.router.navigate(['/login']);
    }
  }
  // Logic to close when clicking anywhere else on the document
  @HostListener('document:click')
  closeSearch() {
    if (this.isSearchActive) {
      this.isSearchActive = false;
      this.searchInput.nativeElement.value = ''; // Optional: clear on outside click
    }
    // Close profile menu if open
    if (this.isProfileMenuOpen) {
      this.isProfileMenuOpen = false;
    }
  }
}
