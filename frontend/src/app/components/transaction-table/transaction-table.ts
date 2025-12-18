import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITransaction } from '../../models/itransaction';

@Component({
  selector: 'app-transaction-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-table.html',
  styleUrl: './transaction-table.scss',
})
export class TransactionTable {
  @Input() transactions: ITransaction[] = [];
}
