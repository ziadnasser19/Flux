import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  @Input() title: string = '';
  @Input() amount: number = 0;
  @Input() iconClass: string = '';
  @Input() variant: 'dark' | 'light' = 'light';
}
