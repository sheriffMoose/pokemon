import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NamedAPIResourceList } from 'pokenode-ts';
import { Observable } from 'rxjs';
import { AppService } from '../../app/app.service';

@Injectable({ providedIn: 'root' })
export class ListGuard {

  appService = inject(AppService);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NamedAPIResourceList> {
    const pageNo = route.params['pageNo'];
    return this.appService.getPokemonList(pageNo);
  }
}
