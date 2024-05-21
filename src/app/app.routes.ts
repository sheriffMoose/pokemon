import { Route } from '@angular/router';
import DetailsRoutes from '../components/details/details.routes';
import EditorRoutes from '../components/editor/editor.routes';
import ErrorRoutes from '../components/error/error.routes';
import ListRoutes from '../components/list/list.routes';

export default [
  ...ListRoutes,
  ...DetailsRoutes,
  ...EditorRoutes,
  ...ErrorRoutes,
] satisfies Route[];
