import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, NavigationError, withNavigationErrorHandler } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import { routes } from './app.routes';

function handleNavigationError(error: NavigationError) {
  console.error('Navigation error:', error);
  return false;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withNavigationErrorHandler(handleNavigationError)
    ),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      NoopAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      MatToolbarModule,
      MatProgressSpinnerModule
    )
  ]
};