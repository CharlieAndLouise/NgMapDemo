import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ProfileService } from './services/profile.service';

const securedPageGuard = async () => {
  const router = inject(Router); 
  const profileService = inject(ProfileService);

  const username = await profileService.tryGetProfile();
  if (!username) {
    router.navigate(['/login']);
    return false;
  }
  else {
    return true;
  }
};


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'map', loadComponent: () => import('./pages/map/map.component').then(m => m.MapComponent), canActivate: [ securedPageGuard ] },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), canActivate: [ securedPageGuard ] },
];


