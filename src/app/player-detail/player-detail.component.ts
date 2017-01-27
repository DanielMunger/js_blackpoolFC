import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [PlayerService]
})
export class PlayerDetailComponent implements OnInit {
  playerId: string;
  playerToDisplay;

  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.playerId = urlParametersArray['id'];
    })
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
    console.log(this.playerId)
  }

}
