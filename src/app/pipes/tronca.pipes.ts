import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'tronca'
})
export class TroncaPipe implements PipeTransform{
    transform(value: string, limite?: number) {
        let limiteReale = limite ?? 100 //coalesh operator

        if(value.length <= limiteReale) return value;
        else return value.substring(0, limiteReale) + '...';
    }
}

