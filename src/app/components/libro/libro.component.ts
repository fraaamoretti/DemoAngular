import { Component, Input } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  @Input()
  
  libro? : Libro; 
  /*
  constructor(private libriService:LibroService){
    this.libro = this.libriService.getRandom();
  }
  */
  modificaPreferito(){
    if(this.libro)
      this.libro.preferito = !this.libro.preferito;
  }
}
