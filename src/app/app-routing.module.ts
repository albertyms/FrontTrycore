import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePersonModule } from './components/create-person/create-person.module';
import { ViewPersonModule } from './components/view-person/view-person.module';
import { ViewPlanetModule } from './components/view-planet/view-planet.module';


const routes: Routes = [
  {
    path: 'homepage', loadChildren: () =>
    import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'persons', loadChildren: () =>
    import('./components/persons/persons.module').then(m => m.PersonsModule)
  },
  {
    path: 'planets', loadChildren: () =>
    import('./components/planets/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: 'viewPerson', loadChildren: () =>
    import('./components/view-person/view-person.module').then(m => ViewPersonModule)
  },
  {
    path: 'viewPlanet', loadChildren: () =>
    import('./components/view-planet/view-planet.module').then(m => ViewPlanetModule)
  },
  {
    path: 'createPerson', loadChildren: () =>
    import('./components/create-person/create-person.module').then(m => CreatePersonModule)
  },
  {
    path: 'createPlanet', loadChildren: () =>
    import('./components/create-planet/create-planet.module').then(m => CreatePersonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
