import { Route } from '@angular/router';
import { DetailsComponent } from './details.component';
import { DetailsGuard } from './details.guard';

export default [
  {
    path: 'details/:name',
    component: DetailsComponent,
    resolve: { details: DetailsGuard }
  }
] satisfies Route[];
