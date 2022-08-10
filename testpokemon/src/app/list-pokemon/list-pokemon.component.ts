import { PokemonServiceService } from './../pokemon-service.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  pokemons: any;
  indexes: number[] = [0, 1, 2];
  stopText: number = 15;
  disabled: boolean = true;
  private interval: any;
  private inter: any;
  pokemon: Pokemon;
  show: boolean = false;
  stoped: boolean = false;
  foundId: number = -1;

  constructor(private service: PokemonServiceService) {}

  ngOnInit(): void {
    this.fetchPokemons();
  }

  private fetchPokemons() {
    return this.service.getPokemons().subscribe((poke) => {
      this.pokemons = Object.values(poke)[0];
      this.pokemons = this.pokemons.slice(0, 6);
      this.pokemon =
        this.pokemons[Math.floor(Math.random() * this.pokemons.length)];
      console.log('pokemons ', this.pokemons);
    });
  }

  lancer() {
    this.disabled = false;
    let count = 0;
    let idx;
    this.inter = setInterval(() => {
      idx = Math.floor(Math.random() * this.pokemons.length);
      this.pokemon = this.pokemons[idx];
    }, 300);
    this.interval = setInterval(() => {
      count++;
      this.stopText--;
      console.log('id ', this.pokemon.id, ' foundid ', this.foundId);
      if (count === 15) {
        this.foundId = this.pokemon.id;
        console.log('clear\n id ', this.pokemon.id, ' foundid ', this.foundId);
        clearInterval(this.inter);
        clearInterval(this.interval);
      }
    }, 1000);
  }

  stop() {
    //this.foundId = this.pokemon.id;
    this.stoped = true;
    clearInterval(this.inter);
    clearInterval(this.interval);
  }

  tapCard(id: number) {
    if (this.stoped) {
      this.foundId = id;
    }
  }

  /*  private fetchArticles() {
    return this.service.getAllArticals().subscribe((artcl) => {
      this.articles = Object.values(artcl)[0];
    });
  } */
}
