import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  authNameLogin: boolean = true;
  mensagem: string = 'Transforme seus sonhos em arte para a vida toda';
  nameLogin: string = 'Guilherme';
  wordLogin: string = `Olá ${this.nameLogin}, seja bem vindo!`
  menu = ['Home', 'Trabalho', 'Catálogo', 'Sobre'];
  menuOpen: boolean = false;
  ngOnInit() {
    AOS.init();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen)
  }
}
