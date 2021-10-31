import { PokemonService } from './../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon?: Pokemon;
  constructor(
    private service: PokemonService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('slug'));
    this.service.getPokemon(id).subscribe((pokemon: Pokemon) => this.pokemon = pokemon);

  }

  goBack(): void {
    this.location.back();
  }

}
