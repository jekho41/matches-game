import { Injectable } from '@angular/core';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
/**
 * Game service - define rules and game play.
 */
export class GameService {

  static readonly MIN_MATCHES = 15;
  static readonly MAX_MATCHES = 30;

  numberOfMatches: number;
  players: Player[];

  private numberOfTurns = 0;

  constructor() { }

  /**
   * Start a new game with the given players.
   * 
   * @param players Arrays of Player
   */
  startGame(players: Player[]): void {
    this.players = players;
    this.numberOfMatches = Math.floor(Math.random() * (GameService.MAX_MATCHES - GameService.MIN_MATCHES)) + GameService.MIN_MATCHES;
  }

  /**
   * Draw the given number of matches.
   * 
   * If number of matches is greater than matches left, throw an error.
   * If it left 0, the last player who's played has won.
   * Otherwise, set next player to play.
   * 
   * @param nbMatches Number of matches to draw
   */
  drawMatches(nbMatches: number): void {
    if (this.numberOfMatches >= nbMatches) {
      this.numberOfMatches -= nbMatches;
      
      if (this.hasWin()) {
        
        this.playerTurn().score++;  

      } else {

        this.numberOfTurns = (this.numberOfTurns + 1) % this.players.length;
      }

    } else {
      throw new Error(`You cannot played ${nbMatches}, left: ${this.numberOfMatches}`);
    }
  }

  /**
   * True if number of matches is equal to 0
   */
  hasWin(): boolean {
    return this.numberOfMatches == 0;
  }

  /**
   * Return the current player turn.
   */
  playerTurn(): Player {
    return this.players[this.numberOfTurns];
  }
}
