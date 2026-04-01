import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  values = [
    {
      icon: 'mission',
      title: 'Missão',
      description: 'Oferecer soluções topográficas e de engenharia de excelência, com tecnologia de ponta, agilidade e comprometimento, superando as expectativas dos nossos clientes.'
    },
    {
      icon: 'vision',
      title: 'Visão',
      description: 'Ser referência nacional em serviços de topografia e engenharia, reconhecida pela qualidade, inovação tecnológica e compromisso com o desenvolvimento sustentável.'
    },
    {
      icon: 'values',
      title: 'Valores',
      description: 'Ética, profissionalismo, respeito ao meio ambiente, inovação constante, compromisso com a qualidade e valorização dos nossos colaboradores e parceiros.'
    }
  ];

  differentials = [
    { number: '150+', label: 'Projetos Realizados' },
    { number: '50+', label: 'Clientes Atendidos' },
    { number: '10+', label: 'Anos de Experiência' },
    { number: '100%', label: 'Satisfação' },
  ];
}
