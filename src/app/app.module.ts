import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewPersonComponent } from './components/view-person/view-person.component';
import { ViewPlanetComponent } from './components/view-planet/view-planet.component';
import { CreatePlanetComponent } from './components/create-planet/create-planet.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewPersonComponent,
    ViewPlanetComponent,
    CreatePlanetComponent,
    CreatePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
