import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerPageComponent } from './player-page/player-page.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'players',
    component: PlayerPageComponent
  }
 ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
