import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
interface Test {
  checked: boolean;
  type: string;
}
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon?: Pokemon
  favorites = 'Want to catch';
  caught = 'Already caught';
  constructor(
    private service: PokemonService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('slug'));
    this.service.getPokemon(id).subscribe((pokemon: Pokemon) => {
      this.pokemon = pokemon;
      this.pokemon.isCaught == undefined ? pokemon.isCaught = false : pokemon.isCaught;
      this.pokemon.isWishlist  == undefined ? pokemon.isWishlist = false : pokemon.isWishlist;
    });
  }

  goBack(): void {
    this.location.back();
  }

  addToList({checked, type}: Test) {
    if(this.pokemon) {
      if(type == this.favorites) {
        this.pokemon.isWishlist = checked;
      }
      if(type == this.caught) {
        this.pokemon.isCaught = checked;
      }
    }
  }

}
