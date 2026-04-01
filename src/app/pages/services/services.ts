import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      title: 'Topografia Convencional',
      description: 'Realizamos levantamentos topográficos planialtimétricos, cadastrais e geodésicos com equipamentos de alta precisão. Nossos serviços incluem demarcação de terrenos, locação de obras, nivelamento geométrico e controle topográfico de obras.',
      image: 'images/hero.png',
      features: ['Levantamento Planialtimétrico', 'Demarcação de Terrenos', 'Locação de Obras', 'Nivelamento Geométrico']
    },
    {
      title: 'Aerofotogrametria com Drones',
      description: 'Utilizamos drones de última geração para mapeamento aéreo, geração de ortomosaicos, modelos digitais de superfície e terreno. Ideal para grandes áreas, com precisão centimétrica e agilidade na entrega.',
      image: 'images/service-drone.png',
      features: ['Mapeamento Aéreo', 'Ortomosaico', 'Modelo Digital de Superfície', 'Cálculo de Volume']
    },
    {
      title: 'Batimetria',
      description: 'Conheça os levantamentos topográficos batimétricos com uso de embarcação autônoma e ecobatímetro acoplado com GNSS RTK. Soluções completas para mapeamento de corpos d\'água e fundos submersos.',
      image: 'images/service-bathymetry.png',
      features: ['Levantamento Batimétrico', 'Mapeamento de Fundo', 'Monitoramento de Reservatórios', 'Controle de Dragagem']
    },
    {
      title: 'Engenharia & Projetos',
      description: 'Somos uma empresa especializada na área de projetos de engenharia civil. Oferecemos projetos executivos de terraplanagem, drenagem, pavimentação e infraestrutura completa.',
      image: 'images/service-drone.png',
      features: ['Projeto de Terraplanagem', 'Drenagem', 'Pavimentação', 'Infraestrutura']
    },
    {
      title: 'Georreferenciamento',
      description: 'Georreferenciamento de imóveis rurais conforme normas do INCRA e exigências do Registro de Imóveis. Profissionais habilitados e credenciados para certificação junto ao SIGEF.',
      image: 'images/hero.png',
      features: ['Certificação INCRA', 'Memorial Descritivo', 'Retificação de Área', 'Cadastro Rural (SIGEF)']
    },
    {
      title: 'Escaneamento 3D',
      description: 'Tecnologia de ponta em escaneamento laser 3D para captura de nuvem de pontos de alta densidade. Ideal para projetos de engenharia reversa, BIM, patrimônio histórico e indústria.',
      image: 'images/service-bathymetry.png',
      features: ['Nuvem de Pontos', 'Modelagem BIM', 'Engenharia Reversa', 'As-Built Digital']
    },
  ];
}
