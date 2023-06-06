import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibroService } from './services/libri.service';
import { TroncaPipe } from './pipes/tronca.pipes';
import { FormsModule } from '@angular/forms';
import { RicercaComponent } from './components/ricerca/ricerca.component';
import { ElencoLibriComponent } from './components/elenco-libri/elenco-libri.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { DettaglioLibroComponent } from './components/dettaglio-libro/dettaglio-libro.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, //da aggiungere i componenti altrimenti è come se non esistessero
    FooterComponent, LibroComponent, TroncaPipe, RicercaComponent, ElencoLibriComponent, AboutComponent, NotFoundComponentComponent, DettaglioLibroComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
