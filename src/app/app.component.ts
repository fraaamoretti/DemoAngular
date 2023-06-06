import { Component } from '@angular/core';
import { LibroService } from './services/libri.service';
import { Libro } from './models/libro';

@Component({ // Decoratore Angular
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libreria Biblioteca';

  libri: Libro[]; //carico tutti i libri


  constructor(private libriservice: LibroService) {
    this.libri = this.libriservice.getAll();
  }

  cerca(valore: string) : void {
    this.libri = this.libriservice.find(valore);
  }
}