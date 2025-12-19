import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
import { FinanceService } from '../../services/finance';
import { IBudget, IGoal } from '../../models/iplan';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planning.html',
  styleUrl: './planning.scss',
})
export class Planning implements OnInit {
  budgets: IBudget[] = [];
  goals: IGoal[] = [];

  constructor(private auth: Auth, private finance: FinanceService) {}

  ngOnInit() {
    const currentUser = this.auth.currentUser;
    if (currentUser) {
      this.budgets = this.finance.getBudgets(currentUser.id);
      this.goals = this.finance.getGoals(currentUser.id);
    }
  }

  getPercentage(current: number, total: number): number {
    if (total === 0) return 0;
    return Math.min(100, Math.round((current / total) * 100));
  }
}
