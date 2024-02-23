import { Component, Input, OnInit } from '@angular/core';
import { SendDataService } from '../../services/send-data.service';
import { PokemonsService } from '../../services/pokemons.service';
import { PokeAPIDetailResponse } from '../../interfaces/PokeApiDetailReponse.interface';
import { Subscription } from 'rxjs';
import { Status } from '../../interfaces/Status.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() inputString!: string;
  pokemon: string = '';
  img: string = '';
  pokemonData!: PokeAPIDetailResponse;
  status: Status =  {
    data: false,
    loading: true,
    error: false
  }
  subscription!: Subscription;
  subscriptionPokeApi!: Subscription;
  constructor(private sendDataService : SendDataService, private pokemonServices: PokemonsService) { }

  ngOnInit(): void {    
    this.subscription = this.sendDataService.dataObservable.subscribe((data: string) => {
      console.log(data);
      this.pokemon = data;
      this.getPokemon()
    });

    
  }
  getPokemon() {
    this.status.data = false;
    this.status.loading = true;
    this.status.error = false;
    this.subscriptionPokeApi = this.pokemonServices.getPokemon(this.pokemon).subscribe((data: PokeAPIDetailResponse) => {
      console.log(data);
      this.pokemonData = data;
      this.img = data.sprites.front_default;

      this.status.data = true;
      this.status.loading = false;
      
    }, (error) => {
      this.status.error = true;
      this.status.loading = false;
    })
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionPokeApi.unsubscribe();
  }
}
