import { HttpClient } from "@angular/common/http";
import { Libro } from "../models/libro";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"; //libreria per la programmazine asincrona in angular

@Injectable()
export class LibroService {
    private libri: Libro[] = [
        new Libro(1, "La divina commedia", "Dante Alighieri", 12, '../../../assets/divinacommedia.png'),
        new Libro(2, "I promessi sposi", "Alessandro Manzoni", 14, '../../../assets/promessisposi.png')
    ]

    constructor (private httpService:HttpClient){
        

    }


    getAll(): Observable<Libro[]> {
        return this.httpService.get<Libro[]>('https://80.211.144.168/api/libri');
  //          .subscribe(r => console.dir(r));

  //      console.log('return');
  //      return this.libri
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
    //    if(stringaDiRicerca=='') return this.getAll();

        return this.libri.filter( l => l.titolo.includes(stringaDiRicerca) || l.autore.includes(stringaDiRicerca))
    }

}