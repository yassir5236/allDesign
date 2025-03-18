import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./hero/hero.component').then((m) => m.HeroComponent),
    data: { animation: 'HomePage' },
  },
  {
    path: 'devis',
    pathMatch: 'full',
    loadComponent: () =>
      import('./devis/devis.component').then((m) => m.DevisComponent),

    data: { animation: 'RegisterPage' },
  },
];
