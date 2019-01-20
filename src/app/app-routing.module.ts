import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from '../app/components/content/homepage/homepage.component';
import { FavouritesComponent } from '../app/components/content/favourites/favourites.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
