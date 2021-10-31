import { Pokemon } from './models/pokemon';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }
  private api = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.api}/${id}`;
    return this.getResponse(url);
  }

  getResponse(url: string = this.api): Observable<any> {
    const response = this._http.get(url).pipe(
      map((res: any) => res)
    );
    return response;
  }
}
