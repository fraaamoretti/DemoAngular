import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-elenco-libri',
  templateUrl: './elenco-libri.component.html',
  styleUrls: ['./elenco-libri.component.css']
})
export class ElencoLibriComponent {
  title = 'Libreria Biblioteca';

  libri: Libro[]; //carico tutti i libri


  constructor(private libriservice: LibroService) {
    this.libri = this.libriservice.getAll();
  }

  cerca(valore: string) : void {
    this.libri = this.libriservice.find(valore);
  }
}
