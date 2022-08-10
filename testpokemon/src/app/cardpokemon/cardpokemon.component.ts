import { Pokemon } from './../pokemon';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cardpokemon',
  templateUrl: './cardpokemon.component.html',
  styleUrls: ['./cardpokemon.component.css']
})
export class CardpokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() show: boolean = true;
  @Output() tapCard = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  getId() {
    this.tapCard.emit(this.pokemon.id);
  }

}
