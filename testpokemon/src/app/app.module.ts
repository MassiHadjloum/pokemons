import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { CardpokemonComponent } from './cardpokemon/cardpokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    CardpokemonComponent
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
