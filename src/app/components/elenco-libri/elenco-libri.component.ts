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

  libri: Libro[] = []; //carico tutti i libri


  constructor(private libriservice: LibroService) {
      libriservice.getAll().subscribe(r => this.libri = r);
  }

  cerca(valore: string) : void {
    this.libri = this.libriservice.find(valore);
  }
}
