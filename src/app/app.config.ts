import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import routes from '../components/routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    provideRouter(routes,
      withComponentInputBinding(),
      withHashLocation(),
    )
  ]
};
