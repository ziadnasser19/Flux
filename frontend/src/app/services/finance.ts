// finance.ts
import { Injectable } from '@angular/core';
import { ITransaction } from '../models/itransaction';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  private mockData: any = {
    '1': {
      balance: 5240.21,
      spending: 250.8,
      saved: 550.25,
      transactions: [
        {
          id: 't1',
          name: 'Shahid VIP',
          company: 'Shahid VIP Subscription',
          type: 'Entertainment',
          amount: -9.99,
          date: '25-11-2025',
          icon: 'bx bxs-movie-play',
        },
        {
          id: 't2',
          name: 'Web Development',
          company: 'Upwork Freelance',
          type: 'Income',
          amount: 19.99,
          date: '24-11-2025',
          icon: 'bx bxl-upwork',
        },
        {
          id: 't3',
          name: 'Electronics',
          company: 'Amazon',
          type: 'Shopping',
          amount: +200.5,
          date: '20-11-2025',
          icon: 'bx bxl-amazon',
        },
      ],
    },
    '2': { balance: 0, spending: 0, saved: 0, transactions: [] },
  };

  constructor() {}

  getUserStats(userId: string) {
    return this.mockData[userId] || { balance: 0, spending: 0, saved: 0 };
  }
  getTransactions(userId: string) {
    return this.mockData[userId]?.transactions || [];
  }
}
