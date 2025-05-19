import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { UserProfileReducer } from './states/user-profile/reducers';
import { MapboxReducer } from './states/mapbox/mapbox-reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore({
      userProfile: UserProfileReducer,
      mapboxState: MapboxReducer,
    })
  ]
};
