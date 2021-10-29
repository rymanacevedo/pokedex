import { Pokemon } from './models/pokemon';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemon(): Pokemon[] {
    return [];
  }

}
