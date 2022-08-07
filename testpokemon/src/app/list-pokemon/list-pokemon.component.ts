import { PokemonServiceService } from './../pokemon-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemons: any;

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

 /*  private fetchArticles() {
    return this.service.getAllArticals().subscribe((artcl) => {
      this.articles = Object.values(artcl)[0];
    });
  } */




}
