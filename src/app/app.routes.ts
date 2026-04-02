import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Engenharia e Topografia de Alta Precisão',
    data: { description: 'A Geometric oferece soluções especializadas em engenharia civil e topografia com tecnologia de ponta, como drones e batimetria. Aceleramos seu projeto reduzindo custos.' },
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'sobre',
    title: 'Sobre Nós | Especialistas em Engenharia',
    data: { description: 'Conheça a história e os valores da Geometric. Somos referência em projetos de engenharia civil e levantamentos topográficos com tecnologia avançada.' },
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'servicos',
    title: 'Serviços de Topografia e Projetos',
    data: { description: 'Descubra nossos serviços: Topografia Convencional, Levantamentos com Drones (VANT), Batimetria e Projetos de Engenharia Civil adaptados a cada necessidade.' },
    loadComponent: () => import('./pages/services/services').then(m => m.Services),
  },
  {
    path: 'contato',
    title: 'Fale Conosco | Orçamentos e Atendimento',
    data: { description: 'Entre em contato com a Geometric para orçamentos e dúvidas. Nossa equipe de engenheiros está pronta para oferecer um atendimento personalizado para o seu projeto.' },
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
  },
  {
    path: 'portfolio',
    title: 'Nosso Portfólio de Projetos',
    data: { description: 'Explore o portfólio de projetos realizados pela Geometric. Veja casos de sucesso em topografia, engenharia civil e soluções tecnológicas.' },
    loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
