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
  next: string = '';
  previous?: string = '';
  offset: number = 0;
  limit: number = 0;
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.callback();
  }

  callback(url?: string): void {
    this.service.getResponse(url).subscribe((res: any) => {
      this.next = res.next;
      this.previous = res.previous;
      const url = new URL(this.next);
      const para = new URLSearchParams(url.search);
      this.offset = Number(para.get('offset'));
      this.limit = Number(para.get('limit'));
      let temp: Pokemon[] = [];
      res.results.forEach((v: any, i: number) => {
       v.id = i + 1;
       v.id += (this.offset - this.limit);
       temp.push(v);
      });
      this.allPokemon = temp;
     });
  }

}
