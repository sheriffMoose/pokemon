import { Route } from '@angular/router';
import { ListComponent } from './list.component';
import { ListGuard } from './list.guard';

export default [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent,
    resolve: { list: ListGuard }
  },
  {
    path: 'list/:pageNo',
    component: ListComponent,
    resolve: { list: ListGuard }
  },
] satisfies Route[];
