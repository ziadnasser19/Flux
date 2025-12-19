// finance.ts
import { Injectable } from '@angular/core';
import { ITransaction } from '../models/itransaction';
import { Wallets } from '../pages/wallets/wallets';
import { IWallet } from '../models/iwallet';
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
      wallets: [
        {
          id: 'w1',
          bankName: 'Flux',
          balance: 5240.0,
          currency: 'USD',
          cardNumber: '1234',
          expiryDate: '12/26',
          theme: 'type1', // Purple
          status: 'Active',
        },
        {
          id: 'w2',
          bankName: 'Flux',
          balance: 60500.0,
          currency: 'EGP',
          cardNumber: '5678',
          expiryDate: '08/27',
          theme: 'type2', // Black/Grey
          status: 'Active',
        },
      ],
    },
    '2': { balance: 0, spending: 0, saved: 0, transactions: [], wallets: [] },
    '3': {
      // Different Stats
      balance: 15750.5,
      spending: 4300.2,
      saved: 8200.0,

      // Different Wallets (3 Cards to test the Grid Layout)
      wallets: [
        {
          id: 'w_ak_1',
          bankName: 'HSBC',
          balance: 15750.5,
          currency: 'EGP',
          cardNumber: '9988',
          expiryDate: '01/28',
          theme: 'type2', // Dark
          status: 'Active',
        },
        {
          id: 'w_ak_2',
          bankName: 'CIB',
          balance: 2000.0,
          currency: 'USD',
          cardNumber: '7744',
          expiryDate: '05/26',
          theme: 'type1', // Purple
          status: 'Active',
        },
        {
          id: 'w_ak_3',
          bankName: 'NBE',
          balance: 5000.0,
          currency: 'EGP',
          cardNumber: '1122',
          expiryDate: '11/29',
          theme: 'type1', // Purple
          status: 'Inactive',
        },
      ],

      // Different Transactions
      transactions: [
        {
          id: 't_ak_1',
          name: 'Car Installment',
          company: 'Bank Auto Loan',
          type: 'Loan',
          amount: -3500.0,
          date: '01-12-2025',
          icon: 'bx bxs-car',
        },
        {
          id: 't_ak_2',
          name: 'Freelance Project',
          company: 'Gulf Client',
          type: 'Income',
          amount: 8000.0,
          date: '30-11-2025',
          icon: 'bx bx-briefcase',
        },
        {
          id: 't_ak_3',
          name: 'Spotify',
          company: 'Subscription',
          type: 'Entertainment',
          amount: -5.0,
          date: '28-11-2025',
          icon: 'bx bxl-spotify',
        },
        {
          id: 't_ak_4',
          name: 'Grocery',
          company: 'Carrefour',
          type: 'Food',
          amount: -800.0,
          date: '25-11-2025',
          icon: 'bx bxs-cart',
        },
      ],
    },
  };

  constructor() {}

  getUserStats(userId: string) {
    return this.mockData[userId] || { balance: 0, spending: 0, saved: 0 };
  }
  getTransactions(userId: string) {
    return this.mockData[userId]?.transactions || [];
  }
  getWallets(userId: string): IWallet[] {
    return this.mockData[userId]?.wallets || [];
  }
}
