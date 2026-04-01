import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  benefits = [
    {
      icon: 'dollar',
      title: 'Reduza até 70% em custos',
      description: 'Ao utilizar diferentes tecnologias trabalhando a favor do seu projeto, aceleramos o processo e reduzimos custos.'
    },
    {
      icon: 'check',
      title: 'Precisão e Qualidade',
      description: 'Comprometidos em oferecer serviços topográficos com alto nível de precisão e qualidade em cada entrega.'
    },
    {
      icon: 'user',
      title: 'Atendimento Personalizado',
      description: 'Entendemos que cada projeto é único e merece atenção individualizada para soluções sob medida.'
    },
    {
      icon: 'tech',
      title: 'Tecnologia Avançada',
      description: 'Mantenha-se à frente da concorrência com o uso de tecnologias avançadas e inovadoras em seus projetos.'
    }
  ];

  services = [
    { number: '01', title: 'ENGENHARIA', description: 'Somos uma empresa especializada na área de projetos de engenharia civil e topografia.' },
    { number: '02', title: 'TOPOGRAFIA COM DRONES / VANTS', description: 'Quando se fala no uso de tecnologia avançada aliada à topografia, somos referência.' },
    { number: '03', title: 'TOPOGRAFIA CONVENCIONAL', description: 'Topografia convencional ainda é bastante requisitada para levantamentos de precisão.' },
    { number: '04', title: 'BATIMETRIA', description: 'Conheça os levantamentos topográficos batimétricos com uso de equipamentos de última geração.' },
  ];
}
