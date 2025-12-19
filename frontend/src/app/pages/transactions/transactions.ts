import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
import { FinanceService } from '../../services/finance';
import { TransactionTable } from '../../components/transaction-table/transaction-table';
import { ITransaction } from '../../models/itransaction';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TransactionTable],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions implements OnInit {
  allTransactions: ITransaction[] = [];
  filteredTransactions: ITransaction[] = [];

  constructor(private auth: Auth, private finance: FinanceService) {}

  ngOnInit() {
    const currentUser = this.auth.currentUser;
    if (currentUser) {
      this.allTransactions = this.finance.getTransactions(currentUser.id);
      this.filteredTransactions = this.allTransactions; // Show all initially
    }
  }

  // Search Function
  onSearch(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredTransactions = this.allTransactions.filter(
      (t) =>
        t.name.toLowerCase().includes(searchValue) ||
        t.company.toLowerCase().includes(searchValue) ||
        t.type.toLowerCase().includes(searchValue)
    );
  }
}
