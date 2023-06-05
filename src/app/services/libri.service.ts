import { Libro } from "../models/libro";
import { Injectable } from "@angular/core";

@Injectable()
export class LibroService {
    private libri: Libro[] = [
        new Libro("La divina commedia", "Dante Alighieri", 12, '../../../assets/divinacommedia.png'),
        new Libro("I promessi sposi", "Alessandro Manzoni", 14, '../../../assets/promessisposi.png')
    ]
    getAll(): Libro[] {
        return this.libri
    }

    getRandom(): Libro {
        return this.libri[0]
    }

}