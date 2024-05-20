import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { NamedAPIResourceList, Pokemon } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  http = inject(HttpClient);


  getPokemonList(pageNo = 1, pageSize = 10) {
    const offset = (pageNo - 1) * pageSize;
    return this.http.get<NamedAPIResourceList>(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`);
  }

  getPokemonDetails(name: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
