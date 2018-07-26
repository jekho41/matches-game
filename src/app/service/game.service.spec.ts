import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { PlayerService } from './player.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService, PlayerService]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  it('should be started a game', inject([GameService, PlayerService], (service: GameService, playerService: PlayerService) => {
    expect(service).toBeTruthy();
    expect(playerService).toBeTruthy();

    let players = playerService.getPlayers(2);
    expect(players.length).toEqual(2);

    service.startGame(players);

    let player = service.playerTurn();
    expect(player.id).toEqual(players[0].id);

    expect(service.hasWin()).toBeFalsy();

    expect(service.numberOfMatches).toBeGreaterThanOrEqual(GameService.MIN_MATCHES);
    expect(service.numberOfMatches).toBeLessThan(GameService.MAX_MATCHES);

    let startNumberOfMatches = service.numberOfMatches;

    service.drawMatches(2);

    player = service.playerTurn();
    expect(player.id).toEqual(players[1].id);

    expect(service.numberOfMatches).toEqual(startNumberOfMatches - 2);

    expect(service.hasWin()).toBeFalsy();

    service.drawMatches(startNumberOfMatches - 2);

    player = service.playerTurn();
    expect(player.id).toEqual(players[1].id); // Last player who played, wins

    expect(service.numberOfMatches).toEqual(0);

    expect(service.hasWin()).toBeTruthy();

  }));

});
