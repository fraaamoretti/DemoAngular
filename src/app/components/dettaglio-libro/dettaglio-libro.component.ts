import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-dettaglio-libro',
  templateUrl: './dettaglio-libro.component.html',
  styleUrls: ['./dettaglio-libro.component.css']
})
export class DettaglioLibroComponent {

  id: number = 0;
  libro?: Libro; 

  constructor(private routeService: ActivatedRoute,  private ls: LibroService) {
    this.id = +this.routeService.snapshot.params['id'];
    this.ls = ls;
    if( !isNaN(this.id) ) ls.getOne(this.id).subscribe(r => this.libro = r);
  }
}
