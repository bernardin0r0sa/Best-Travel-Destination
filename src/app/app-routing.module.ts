import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CountryFindComponent } from './components/country-find/country-find.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'country-find/:param', component: CountryFindComponent },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
