import { Injectable } from '@angular/core';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
/**
 * Player service
 */
export class PlayerService {

  constructor() { }

  /**
   * Create as much as the given number of players.
   * 
   * @param nbPlayers number of players to create.
   */
  getPlayers(nbPlayers: number): Player[] {
    let players = [];
    
    for (let i = 1; i <= nbPlayers; i++) {
      players.push(new Player(i));
    }
    
    return players;
  }
}
