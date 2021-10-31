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
  next?: string;
  previous?: string;
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon(): void {
   this.service.getAllPokemon().subscribe((p: any) => {
    this.next = p.next;
    this.previous = p.previous;
    let temp: Pokemon[] = [];
     p.results.forEach((v: any, i: number) => {
      v.id = i + 1;
      temp.push(v);
     });
     this.allPokemon = temp;
    });
  }

  callback(url: string): void {
    this.service.getResponse(url).subscribe((p: any) => {
      this.next = p.next;
      this.previous = p.previous;
      let temp: Pokemon[] = [];
      p.results.forEach((v: any, i: number) => {
       v.id = i + 1;
       temp.push(v);
      });
      this.allPokemon = temp;
     });
  }

}
