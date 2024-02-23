import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeApiResponse } from '../interfaces/PokeApiResponse.interface';
import { PokeAPIDetailResponse } from '../interfaces/PokeApiDetailReponse.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private httpCliente: HttpClient) {}

  getAllPokemons() {
    return this.httpCliente.get<PokeApiResponse>(
      ` https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`,
    );
  }
  getPokemon(name: string) {
    return this.httpCliente.get<PokeAPIDetailResponse>(
      ` https://pokeapi.co/api/v2/pokemon/${name}`,
    );
  }
}
