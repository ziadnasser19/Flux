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
          amount: 600.0,
          date: '24-11-2025',
          icon: 'bx bxl-upwork',
        }, // Updated amount
        {
          id: 't3',
          name: 'Electronics',
          company: 'Amazon',
          type: 'Shopping',
          amount: -1200.5,
          date: '20-11-2025',
          icon: 'bx bxl-amazon',
        },
        // Add these new ones:
        {
          id: 't4',
          name: 'Netflix',
          company: 'Netflix Subscription',
          type: 'Entertainment',
          amount: -85.0,
          date: '15-11-2025',
          icon: 'bx bxs-movie-play',
        },
        {
          id: 't5',
          name: 'Vodafone',
          company: 'Internet Bill',
          type: 'Utilities',
          amount: -400.0,
          date: '01-11-2025',
          icon: 'bx bx-wifi',
        },
        {
          id: 't6',
          name: 'Salary',
          company: 'Tech Corp',
          type: 'Income',
          amount: 11500.0,
          date: '01-11-2025',
          icon: 'bx bx-building-house',
        },
        {
          id: 't7',
          name: 'Nike Store',
          company: 'Running Shoes',
          type: 'Shopping',
          amount: -720.5,
          date: '10-11-2025',
          icon: 'bx bxs-t-shirt',
        },
        {
          id: 't8',
          name: 'Starbucks',
          company: 'Morning Coffee',
          type: 'Food',
          amount: -30.0,
          date: '03-11-2025',
          icon: 'bx bxs-coffee',
        },
        {
          id: 't9',
          name: 'Shell Station',
          company: 'Car Refuel',
          type: 'Transport',
          amount: -600.0,
          date: '02-11-2025',
          icon: 'bx bxs-gas-pump',
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
