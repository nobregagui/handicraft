import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel-works',
  templateUrl: './carrousel-works.component.html',
  styleUrls: ['./carrousel-works.component.css'],
})
export class CarrouselWorksComponent implements OnInit {
  titleSection: string = 'Nossos Trabalhos';

  cards: any = [
    {
      urlImg: '../../../assets/artesanato.png',
      title: 'Bordado',
      description:
        'O bordado envolve a aplicação de fios em tecidos para criar padrões decorativos ou ilustrações.',
      textButton: 'Veja Mais',
    },
    {
      urlImg: '../../../assets/artesanato-em-papel.png',
      title: 'Pintura em tela',
      description:
        'A pintura em tela é a criação de obras de arte em telas utilizando tintas acrílicas, aquarelas ou óleos.',
      textButton: 'Veja Mais',
    },
    {
      urlImg: '../../../assets/artesanato-em-papel.png',
      title: 'Pintura em tela',
      description:
        'A pintura em tela é a criação de obras de arte em telas utilizando tintas acrílicas, aquarelas ou óleos.',
      textButton: 'Veja Mais',
    },
    {
      urlImg: '../../../assets/artesanato-em-papel.png',
      title: 'Pintura em tela',
      description:
        'A pintura em tela é a criação de obras de arte em telas utilizando tintas acrílicas, aquarelas ou óleos.',
      textButton: 'Veja Mais',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  scrollToRigth() {
    const scrollCourses = document.getElementById('container-card');
    if (scrollCourses) {
      scrollCourses.scroll({
        left: scrollCourses.scrollLeft + 350,
        top: 0,
        behavior: 'smooth',
      });
    }
  }
  scrollToLeft() {
    const scrollCourses = document.getElementById('container-card');
    if (scrollCourses) {
      scrollCourses.scroll({
        left: scrollCourses.scrollLeft - 350,
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
