import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./hero/hero.component').then((m) => m.HeroComponent),
    data: { animation: 'homePage' },
  },
  {
    path: 'devis',
    pathMatch: 'full',
    loadComponent: () =>
      import('./devis/devis.component').then((m) => m.DevisComponent),

    data: { animation: 'registerPage' },
  },

  {
    path: 'about',
    pathMatch: 'full',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),

    data: { animation: 'about' },
  },

  {
    path: 'services',
    pathMatch: 'full',
    loadComponent: () =>
      import('./services/services.component').then((m) => m.ServicesComponent),

    data: { animation: 'service' },
  },

  {
    path: 'demande',
    pathMatch: 'full',
    loadComponent: () =>
      import('./demande/demande.component').then((m) => m.DemandeComponent),

    data: { animation: 'demande' },
  },

  {
    path: 'portfolio',
    pathMatch: 'full',
    loadComponent: () =>
      import('./portfolio/portfolio.component').then((m) => m.PortfolioComponent),

    data: { animation: 'porfolio' },
  }
];
