import { Component } from '@angular/core';
import { PlayerPageComponent } from './player-page/player-page.component';

import { routing } from './app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
