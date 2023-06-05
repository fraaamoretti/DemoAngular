import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  libriService : LibroService;
  libro : Libro; 

  constructor(){
    this.libriService = new LibroService();
    this.libro = new Libro('La divina commedia', 'Dante Alighieri', 12);
  }
}
