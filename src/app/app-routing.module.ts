import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElencoLibriComponent } from './components/elenco-libri/elenco-libri.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { DettaglioLibroComponent } from './components/dettaglio-libro/dettaglio-libro.component';

const routes: Routes = [
  {path: '', component: ElencoLibriComponent },
  {path: 'libro/:id', component: DettaglioLibroComponent }, //parametrico
  {path: 'about', component: AboutComponent },
  {path: '**', component: NotFoundComponentComponent} //qualsiasi che non sia quelli sopra


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
