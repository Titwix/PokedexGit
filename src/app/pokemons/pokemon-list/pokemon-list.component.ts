import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PagedData } from 'src/app/models/paged-data';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons:PagedData<Pokemon>;
  offset:number = 0;
  limit:number = 50;
  array = [];
  direction = '';

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons(this.offset, this.limit).subscribe(pokemons => this.pokemons = pokemons);
  }

  onScroll(ev) {
    this.pokemonService.getPokemons(this.offset,this.limit+=20).subscribe(pokemons => this.pokemons = pokemons);
  }

}
