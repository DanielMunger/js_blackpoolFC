import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerPageComponent } from './player-page/player-page.component';

const appRoutes: Routes = [
  {
    path: 'players',
    component: PlayerPageComponent
  }
 ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
