import { Route } from '@angular/router';
import { ErrorComponent } from './error.component';

export default [
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
  }
] satisfies Route[];
