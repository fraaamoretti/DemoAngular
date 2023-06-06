import { Libro } from "../models/libro";
import { Injectable } from "@angular/core";

@Injectable()
export class LibroService {
    private libri: Libro[] = [
        new Libro(1, "La divina commedia", "Dante Alighieri", 12, '../../../assets/divinacommedia.png'),
        new Libro(2, "I promessi sposi", "Alessandro Manzoni", 14, '../../../assets/promessisposi.png')
    ]
    getAll(): Libro[] {
        return this.libri
    }

    getRandom(): Libro {
        return this.libri[0]
    }

    getOne(param: number): Libro | undefined {
        for (let l of this.libri){
            if(param == l.id) return l
        }
        return undefined;
    }

    add(l : Libro){
        this.libri.push(l);
    }

    find(stringaDiRicerca : string) : Libro[]{
        if(stringaDiRicerca=='') return this.getAll();

        return this.libri.filter( l => l.titolo.includes(stringaDiRicerca) || l.autore.includes(stringaDiRicerca))
    }

}