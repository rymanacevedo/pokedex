import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  allPokemon: Pokemon[] = [];

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon(): void {
   this.service.getAllPokemon().subscribe((p: Pokemon[]) => {
     console.log(p);
      this.allPokemon = p ;
    });
  }

}
