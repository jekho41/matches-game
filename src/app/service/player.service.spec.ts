import { TestBed, inject } from '@angular/core/testing';

import { PlayerService } from './player.service';

describe('PlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService]
    });
  });

  it('should be created', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));

  it('should create severals players', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();

    expect(service.getPlayers(3).length).toEqual(3);
    expect(service.getPlayers(30).length).toEqual(30);
  }));

  it('should create 0 player with negative numbers', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();

    expect(service.getPlayers(0).length).toEqual(0);
    expect(service.getPlayers(-10).length).toEqual(0);
  }));
});
