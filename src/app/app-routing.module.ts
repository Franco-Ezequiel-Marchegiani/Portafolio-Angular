import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path : 'about', component: AboutComponent},
  {path : 'item/:id', component: ItemComponent},
  {path : 'search/:termino', component: SearchComponent },
  {path : '**', pathMatch: 'full' ,redirectTo: ''} //En caso de error redirecciona a "home"
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  //Importante usar el "hash" para que cualquiera pueda navegar tranquilamente
  exports: [RouterModule]
})
export class AppRoutingModule { }
