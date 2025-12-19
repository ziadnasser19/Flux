import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
import { FinanceService } from '../../services/finance';
import { IWallet } from '../../models/iwallet';
import { CreditCard } from '../../components/credit-card/credit-card';

@Component({
  selector: 'app-wallets',
  standalone: true,
  imports: [CommonModule, CreditCard],
  templateUrl: './wallets.html',
  styleUrl: './wallets.scss',
})
export class Wallets implements OnInit {
  myWallets: IWallet[] = [];

  constructor(private auth: Auth, private finance: FinanceService) {}

  ngOnInit() {
    const currentUser = this.auth.currentUser;
    if (currentUser) {
      this.myWallets = this.finance.getWallets(currentUser.id);
    }
  }
}
