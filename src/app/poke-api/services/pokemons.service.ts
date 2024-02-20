import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private httpCliente: HttpClient) {}

  getAllPokemons() {
    return this.httpCliente.get<any>(
      ` https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`,
    );
  }
  getPokemon(name: string) {
    return this.httpCliente.get<any>(
      ` https://pokeapi.co/api/v2/pokemon/${name}`,
    );
  }
}
