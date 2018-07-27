import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { PlayerService } from '../service/player.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Player } from '../model/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
/**
 * Main View of the Matches game.
 * 
 * Display matches.
 * Display player's names and scores.
 * 
 * On win, open an alert to say who won.
 * 
 * The game restart automatically.
 */
export class GameComponent implements OnInit { 

  static readonly NB_PLAYERS = 2;

  nbOfMatches;
  players: Player[];
  playerTurn: Player;

  constructor(private gameService: GameService, private playerService: PlayerService) { 
  }

  ngOnInit() {

    this.players = this.playerService.getPlayers(GameComponent.NB_PLAYERS);
    
    this.startGame();
  }

  startGame() {
    this.gameService.startGame(this.players);

    this.loopGame();
  }

  loopGame() {
        
    this.nbOfMatches = Array(this.gameService.numberOfMatches).map((m, i) => i);

    this.playerTurn = this.gameService.playerTurn();
  }

  draw(n: number) {
    this.gameService.drawMatches(n);

    this.loopGame();

    if (this.gameService.hasWin()) {
      alert(`Player ${this.gameService.playerTurn().id} a gagné !`);

      // Restart the game
      this.startGame();
    }
  }
}
