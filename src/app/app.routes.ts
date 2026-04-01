import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'servicos',
    loadComponent: () => import('./pages/services/services').then(m => m.Services),
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
