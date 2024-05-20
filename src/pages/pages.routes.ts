import { Route } from '@angular/router';
import DetailsRoutes from './details/details.routes';
import EditorRoutes from './editor/editor.routes';
import ErrorRoutes from './error/error.routes';
import ListRoutes from './list/list.routes';

export default [
  ...ListRoutes,
  ...DetailsRoutes,
  ...EditorRoutes,
  ...ErrorRoutes,
] satisfies Route[];
