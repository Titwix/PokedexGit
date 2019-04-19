import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemons/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: Pokemon;
  urlAudio:string="../../assets/audio/";

  constructor(private route:ActivatedRoute, private pokemonService:PokemonService, private location:Location) { }

  ngOnInit() {
    this.getPokemon();
    this.playCriPokemon();
  }

  getPokemon() {
    const id:number = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack() {
    this.location.back();
  }

  playCriPokemon(){
    const id:number = +this.route.snapshot.paramMap.get('id');
    let audio = new Audio();
    audio.src = this.urlAudio+id+".mp3";
    audio.load();
    audio.play();
  }

}
