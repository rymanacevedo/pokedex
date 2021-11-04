import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CheckboxComponent } from './pokemon-details/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    PokedexComponent,
    PokemonDetailsComponent,
    PokemonComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
