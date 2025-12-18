import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // 1. Variable to track state
  isSearchActive: boolean = false;

  // 2. Reference to the input element in HTML (look for #searchInput)
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(public auth: Auth) {}

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

  // Logic to close when clicking anywhere else on the document
  @HostListener('document:click')
  closeSearch() {
    if (this.isSearchActive) {
      this.isSearchActive = false;
      this.searchInput.nativeElement.value = ''; // Optional: clear on outside click
    }
  }
}
