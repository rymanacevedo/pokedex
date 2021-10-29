import { Pokemon } from './../models/pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() selectedPokemon?: Pokemon
  constructor() { }

  ngOnInit(): void {
  }
}
