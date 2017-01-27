import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AboutComponent } from './about/about.component';
const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'players',
    component: PlayerPageComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
 ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
