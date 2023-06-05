import { Component } from "@angular/core";

@Component({
    selector: 'app-footer', //come lo voglio chiamare?
    templateUrl: './footer.component.html', //pagina html da scrivere nell'url
    styleUrls: ['./footer.component.css'] //foglio di stile associato
})
export class FooterComponent{
    footerText = 'PCTO Pascal 2023'
}