import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonTrackerService {
  private favoritePokemon = new BehaviorSubject<Pokemon[]>([]);
  private caughtPokemon = new BehaviorSubject<Pokemon[]>([]);
  favoritePokemon$ = this.favoritePokemon.asObservable();
  caughtPokemon$ = this.caughtPokemon.asObservable();
  constructor() { }
}
