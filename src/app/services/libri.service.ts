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

    constructor(private httpService: HttpClient) {


    }


    getAll(): Observable<Libro[]> {
        return this.httpService.get<Libro[]>('https://80.211.144.168/api/libri');
        //          .subscribe(r => console.dir(r));
        //      console.log('return');
        //      return this.libri
    }

    getRandom(): Observable<Libro> {
        return this.httpService.get<Libro>('https://80.211.144.168/api/libri/random');
    }

    getOne(param: number): Observable<Libro | undefined>{
        return this.httpService.get<Libro>(`https://80.211.144.168/api/libri/${param}`);
    }

    add(l: Libro) {
        this.httpService.post(`https://80.211.144.168/api/libri`,l);
    }

    find(stringaDiRicerca: string): Observable<Libro[]> {
        return this.httpService.get<Libro[]>(`https://80.211.144.168/api/libri/find/${stringaDiRicerca}`);
        //  return this.libri.filter(l => l.titolo.includes(stringaDiRicerca) || l.autore.includes(stringaDiRicerca))
    }

}