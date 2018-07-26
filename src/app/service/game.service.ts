import { Injectable } from '@angular/core';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
 
  static readonly MIN_MATCHES = 15;
  static readonly MAX_MATCHES = 30;

  numberOfMatches: number;
  players: Player[];

  private turn = 0;


  constructor() { 

  }

  startGame(players: Player[]): void {
    this.players = players;
    this.numberOfMatches = Math.floor(Math.random() * (GameService.MAX_MATCHES - GameService.MIN_MATCHES)) + GameService.MIN_MATCHES;
  }

  drawMatches(nbMatches: number): void {
    if (this.numberOfMatches >= nbMatches) {
      this.numberOfMatches -= nbMatches;
      
      if (this.hasWin()) {
        
        this.playerTurn().score++;  

      } else {

        this.turn = (this.turn + 1) % this.players.length;
      }

    } else {
      throw new Error(`You cannot played ${nbMatches}, left: ${this.numberOfMatches}`);
    }
  }

  hasWin(): boolean {
    return this.numberOfMatches == 0;
  }

  playerTurn(): Player {
    return this.players[this.turn];
  }
}
