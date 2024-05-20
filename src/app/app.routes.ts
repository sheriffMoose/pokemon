import { Routes } from '@angular/router';
import pagesRoutes from '../pages/pages.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  ...pagesRoutes
];
