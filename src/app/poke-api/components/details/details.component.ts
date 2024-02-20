import { Component, Input, OnInit } from '@angular/core';
import { SendDataService } from '../../services/send-data.service';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() inputString!: string;
  pokemon: string = '';
  img: string = ''
  constructor(private sendDataService : SendDataService, private pokemonServices: PokemonsService) { }

  ngOnInit(): void {
    console.log('init');
    
    this.sendDataService.dataObservable.subscribe((data: string) => {
      console.log(data);
      this.pokemon = data;
      this.getPokemon()

      
    });

    
  }
  getPokemon() {
    this.pokemonServices.getPokemon(this.pokemon).subscribe((data: any) => {
      console.log(data);
      this.img = data.sprites.front_default;


      
    })
    
  }

}
