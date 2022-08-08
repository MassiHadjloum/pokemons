import { PokemonServiceService } from './../pokemon-service.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemons: any;
  stopText: number = 15;
  disabled: boolean = true;
  private interval: any;


  constructor(private service: PokemonServiceService) { }

  ngOnInit(): void {
    this.fetchPokemons();
  }


  private fetchPokemons() {
    return this.service.getPokemons().subscribe((poke) => {
      this.pokemons = Object.values(poke)[0];
      console.log("pokemons ", this.pokemons);
    })
  }

  lancer() {
    console.log(this.pokemons.length);
    this.disabled = false;
    let count = 0;
    this.interval = setInterval(() => {
      const idx = Math.floor(Math.random() * this.pokemons.length);
      count++;
      this.stopText --;
      console.log(idx);

      if(count === 15) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

 /*  private fetchArticles() {
    return this.service.getAllArticals().subscribe((artcl) => {
      this.articles = Object.values(artcl)[0];
    });
  } */




}
