import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWallet } from '../../models/iwallet';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-card.html',
  styleUrl: './credit-card.scss',
})
export class CreditCard {
  @Input() wallet!: IWallet; // Expects wallet data
}
