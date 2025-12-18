import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { FinanceService } from '../../services/finance';
import { StatCard } from '../../components/stat-card/stat-card';
import { TransactionTable } from '../../components/transaction-table/transaction-table';
import { ITransaction } from '../../models/itransaction';
import { ChartComponent } from '../../components/chart/chart';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, StatCard, TransactionTable, ChartComponent, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  stats: any = { balance: 0, spending: 0, saved: 0 };
  activeCardIndex: number = 0;
  recentTransactions: ITransaction[] = [];
  cardsConfig = [
    { title: 'Total Balance', key: 'balance', icon: 'bx bx-wallet' },
    { title: 'Total Spending', key: 'spending', icon: 'bx bxs-credit-card' },
    { title: 'Total Saved', key: 'saved', icon: 'bx bxs-bank' },
  ];

  setActiveCard(index: number) {
    this.activeCardIndex = index;
  }

  //chart
  selectedPeriod: string = 'Last 7 days';
  chartDataOptions: any = {
    'Last 7 days': {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      income: [12, 19, 10, 15, 22, 30, 25],
      expenses: [8, 15, 5, 10, 18, 20, 15],
    },
    'Last 30 days': {
      labels: ['W1', 'W2', 'W3', 'W4'],
      income: [50, 70, 40, 90],
      expenses: [30, 40, 20, 60],
    },
    'Last year': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      income: [200, 300, 250, 400, 350, 500, 450, 400, 500, 600, 700, 800],
      expenses: [150, 200, 180, 220, 300, 250, 300, 250, 300, 400, 350, 500],
    },
  };

  // 3. Current Data to pass to the Chart Component
  currentChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };

  updateChart() {
    const data = this.chartDataOptions[this.selectedPeriod];

    this.currentChartData = {
      labels: data.labels,
      datasets: [
        {
          data: data.income,
          label: 'Income',
          fill: true,
          tension: 0.4,
          borderColor: '#c8ee44',
          backgroundColor: 'rgba(200, 238, 68, 0.1)',
          pointRadius: 0, // Hide points normally
          pointHitRadius: 30, // <--- FIX: Large invisible target for mouse
          pointHoverRadius: 6, // Show a 6px point when hovered          borderWidth: 2,
        },
        {
          data: data.expenses,
          label: 'Expenses',
          fill: false,
          tension: 0.4,
          borderColor: '#201e34',
          borderDash: [5, 5],
          pointRadius: 0, // Hide points normally
          pointHitRadius: 30, // <--- FIX: Large invisible target for mouse
          pointHoverRadius: 6, // Show a 6px point when hovered          borderWidth: 2,
        },
      ],
    };
  }
  constructor(private auth: Auth, private finance: FinanceService) {}

  ngOnInit() {
    const currentUser = this.auth.currentUser;

    if (currentUser) {
      this.stats = this.finance.getUserStats(currentUser.id);
      this.recentTransactions = this.finance.getTransactions(currentUser.id).slice(0, 3);
    }
    this.updateChart();
  }
}
