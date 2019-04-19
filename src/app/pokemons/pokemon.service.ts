import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PagedData } from '../models/paged-data';
import { Pokemon } from '../models/pokemon';
// import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonsUrl:string = 'http://51.75.122.159:3000/pokemons';

  constructor(private http: HttpClient) { }

  getPokemons(offset:number, limit:number): Observable<PagedData<Pokemon>> {
    return this.http.get<PagedData<Pokemon>>(this.pokemonsUrl+"?offset="+offset+"&limit="+limit);
  }

  getPokemon(id:number):Observable<Pokemon>{
    const url = this.pokemonsUrl + "/" + id;
    return this.http.get<Pokemon>(url);
  }
}
