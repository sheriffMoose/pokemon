import { Route } from '@angular/router';
import { DetailsGuard } from '../details/details.guard';
import { EditorComponent } from './editor.component';

export default [
  {
    path: 'editor/:name',
    component: EditorComponent,
    resolve: { details: DetailsGuard }
  }
] satisfies Route[];
