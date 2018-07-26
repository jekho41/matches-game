import { Injectable } from '@angular/core';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers(nbPlayers: number): Player[] {
    let players = [];
    
    for (let i = 1; i <= nbPlayers; i++) {
      players.push(new Player(i));
    }
    
    return players;
  }
}
