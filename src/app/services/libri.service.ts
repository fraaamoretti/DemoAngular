import { Libro } from "../models/libro";

export class LibroService{
    private libri:Libro[] = [
        new Libro("La divina commedi", "Dante Alighieri", 12),
        new Libro("I promessi sposi", "Alessandro Manzoni", 14)
    ]
    getAll() : Libro [] {
        return this.libri
    }

    getRandom() : Libro {
        return this.libri[0]
    }

}