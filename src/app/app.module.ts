import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibroService } from './services/libri.service';
import { TroncaPipe } from './pipes/tronca.pipes';

@NgModule({
  declarations: [
    AppComponent, //da aggiungere i componenti altrimenti è come se non esistessero
    FooterComponent, LibroComponent, TroncaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
