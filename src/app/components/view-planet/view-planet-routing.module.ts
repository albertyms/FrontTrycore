import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPlanetComponent } from './view-planet.component';


const routes: Routes = [
  { path: '', component: ViewPlanetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPlanetRoutingModule { }
