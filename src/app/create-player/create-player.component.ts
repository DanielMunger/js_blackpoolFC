import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css'],
  providers: [PlayerService]
})
export class CreatePlayerComponent implements OnInit {
  newPlayer: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  createPlayer(name, position, number, dateofbirth, hieght, weight, nationality, image)
  {
    console.log(name);
    this.newPlayer = new Player(name, position, number, dateofbirth, hieght, weight, nationality, image);
    this.playerService.createPlayer(this.newPlayer);
  }
}
