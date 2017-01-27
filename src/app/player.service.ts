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
}
