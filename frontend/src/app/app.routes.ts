import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Login } from './pages/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Transactions } from './pages/transactions/transactions';
import { Wallets } from './pages/wallets/wallets';
import { Settings } from './pages/settings/settings';
import { Planning } from './pages/planning/planning';
import { Signup } from './pages/signup/signup';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';
import { Help } from './pages/help/help';

export const routes: Routes = [
  // 1. Redirect empty path to login (or dashboard if you prefer)
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 2. Auth Routes (No Sidebar/Header)
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login },
      { path: 'signup', component: Signup },
      { path: 'forgot-password', component: ForgotPassword },
    ],
  },

  // 3. Main App Routes (With Sidebar/Header)
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'transactions', component: Transactions },
      { path: 'wallets', component: Wallets },
      { path: 'settings', component: Settings },
      { path: 'planning', component: Planning },
      { path: 'help', component: Help },
    ],
  },

  // 4. Wildcard (404)
  { path: '**', component: NotFound },
];
