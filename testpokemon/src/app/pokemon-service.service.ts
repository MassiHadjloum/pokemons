import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  getway: string = "https://pokeapi-enoki.netlify.app/pokeapi.json";
  pokemons: Observable<Pokemon[]>;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.getway);
  }
}
