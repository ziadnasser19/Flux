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
export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
      { path: 'signup', component: Signup },
      { path: 'forgot-password', component: ForgotPassword },
    ],
  },
  {
    path: 'dashboard',
    component: MainLayout,
    canActivate: [authGuard], // This protects the layout and all its children

    children: [
      { path: '', component: Dashboard },
      { path: 'transactions', component: Transactions },
      { path: 'wallets', component: Wallets },
      { path: 'settings', component: Settings },
      { path: 'planning', component: Planning },
    ],
  },
  { path: '**', component: NotFound },
];
