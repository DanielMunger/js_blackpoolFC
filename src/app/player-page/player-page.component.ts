import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css'],
  providers: [PlayerService]
})
export class PlayerPageComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private router: Router, private playerService: PlayerService, private af: AngularFire) { }

  ngOnInit() {
    this.players= this.playerService.getPlayers();
  }

}
