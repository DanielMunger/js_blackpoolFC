import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.players = af.database.list('players');
  }

  getPlayers()
  {
    return this.players;
  }
  getPlayerById(id)
  {
    return this.af.database.object('/players/' + id);
  }
  getPlayerByName(name)
  {
    return this.af.database.object('/players/' + name);
  }

  createPlayer(newPlayer)
  {
    this.players.push(newPlayer);
  }

  updatePlayer(name, position, number, dob, height, weight, image, playerToUpdate)
  {
    playerToUpdate.name = name;
    console.log(typeof name)
    playerToUpdate.position = position;
    playerToUpdate.number = parseInt(number);
    playerToUpdate.dateofbirth = dob;
    playerToUpdate.hieght = height;
    playerToUpdate.weight = weight;
    playerToUpdate.image = image;

    var playerInFirebase = this.getPlayerById(playerToUpdate.$key);
    console.log(playerInFirebase)
    playerInFirebase.update({name: playerToUpdate.name,
      position: playerToUpdate.position,
      jerseynumber: playerToUpdate.jerseynumber,
      dateofbirth: playerToUpdate.dateofbirth,
      hieght: playerToUpdate.hieght,
      weight: playerToUpdate.weight,
      nationality: playerToUpdate.nationality,
      image: playerToUpdate.image})

  }
}
