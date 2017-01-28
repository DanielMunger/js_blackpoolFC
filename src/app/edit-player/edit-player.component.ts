import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }
  playerList;
  playerToDisplay;
  playerToDisplay2;
  formShowing: boolean = false;

  ngOnInit() {
    this.playerList = this.playerService.getPlayers();
  }

  showForm()
  {
    this.formShowing=true;
  }
  hideForm()
  {
    this.formShowing = false;
  }
  selectPlayer(id)
  {

    // this.playerToDisplay = this.playerService.getPlayerByName(player)
    // console.log("player1", this.playerToDisplay);
    // // this.playerToDisplay.subscribe(result => this.playerToDisplay = result);
    // console.log("player",player);
    // console.log("selectedplayer:" ,this.playerToDisplay);
    // this.playerService.getPlayerById("1").subscribe(result => {
    //   this.playerToDisplay2 = result;
    //   console.log(this.playerToDisplay2);
    // })
    console.log(id);
    this.playerService.getPlayerById(id).subscribe(dataLastEmittedFromObserver => {
     this.playerToDisplay = dataLastEmittedFromObserver;

     console.log(this.playerToDisplay);
   })
  }

  editPlayer(name, position, number, dob, height, weight, image)
  {

    this.playerService.updatePlayer(name, position, number, dob, height, weight, image, this.playerToDisplay);
  }

  deletePlayer(player)
  {
    console.log(player);
  }

}
