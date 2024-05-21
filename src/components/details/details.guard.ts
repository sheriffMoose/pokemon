import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { Observable } from 'rxjs';
import { AppService } from '../../app/app.service';

@Injectable({ providedIn: 'root' })
export class DetailsGuard {

  appService = inject(AppService);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pokemon> {
    const name = route.params['name'];
    return this.appService.getPokemonDetails(name);
  }
}
