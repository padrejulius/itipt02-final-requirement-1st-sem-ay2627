import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.page').then((m) => m.AdminPage),
  },
  {
    path: 'admin-edit-profile',
    loadComponent: () => import('./admin-edit-profile/admin-edit-profile.page').then((m) => m.AdminEditProfilePage),
  },
  {
    path: 'admin-login',
    loadComponent: () => import('./admin-login/admin-login.page').then((m) => m.AdminLoginPage),
  },
  {
    path: 'archive',
    loadComponent: () => import('./archive/archive.page').then((m) => m.ArchivePage),
  },
  {
    path: 'history',
    loadComponent: () => import('./history/history.page').then((m) => m.HistoryPage),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'user-login',
    loadComponent: () => import('./user-login/user-login.page').then((m) => m.UserLoginPage),
  },
];
