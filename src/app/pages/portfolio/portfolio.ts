import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  activeFilter = signal('todos');

  categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'topografia', label: 'Topografia' },
    { id: 'drone', label: 'Drones' },
    { id: 'batimetria', label: 'Batimetria' },
    { id: 'engenharia', label: 'Engenharia' },
  ];

  projects = [
    {
      title: 'Levantamento Topográfico - Condomínio Residencial',
      category: 'topografia',
      description: 'Levantamento planialtimétrico de área de 25.000m² para implantação de condomínio residencial.',
      image: 'images/hero.png',
      location: 'Salvador, BA',
    },
    {
      title: 'Mapeamento Aéreo - Fazenda Santa Cruz',
      category: 'drone',
      description: 'Aerofotogrametria com drone para mapeamento de propriedade rural de 500 hectares.',
      image: 'images/service-drone.png',
      location: 'Feira de Santana, BA',
    },
    {
      title: 'Batimetria - Rio Paraguaçu',
      category: 'batimetria',
      description: 'Levantamento batimétrico para monitoramento de profundidade e volume do reservatório.',
      image: 'images/hero.png',
      location: 'Cachoeira, BA',
    },
    {
      title: 'Projeto de Terraplanagem - Loteamento Solar',
      category: 'engenharia',
      description: 'Projeto executivo de terraplanagem para implantação de loteamento com 200 lotes.',
      image: 'images/service-drone.png',
      location: 'Lauro de Freitas, BA',
    },
    {
      title: 'Georreferenciamento - Fazenda Boa Vista',
      category: 'topografia',
      description: 'Georreferenciamento de imóvel rural de 1.200 hectares conforme normas INCRA.',
      image: 'images/hero.png',
      location: 'Barreiras, BA',
    },
    {
      title: 'Mapeamento Aéreo - Parque Industrial',
      category: 'drone',
      description: 'Ortomosaico e modelo digital de superfície de complexo industrial de 80.000m².',
      image: 'images/service-drone.png',
      location: 'Camaçari, BA',
    },
  ];

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'todos') return this.projects;
    return this.projects.filter(p => p.category === filter);
  });

  setFilter(id: string) {
    this.activeFilter.set(id);
  }
}
