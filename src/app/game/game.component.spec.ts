import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { GameService } from '../service/game.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(component.players.length).toEqual(GameComponent.NB_PLAYERS);
    expect(component.playerTurn.id).toEqual(component.players[0].id);
  });

  it('should display number of matches',
      async(() => {
          const el = fixture.nativeElement;
          const numberOfMatchesDisplayed = el.querySelectorAll('img').length;
          expect(numberOfMatchesDisplayed).toBe(component.nbOfMatches.length);
      })
  );

  it('should turn player over rounds', () => {
    expect(component).toBeTruthy();

    expect(component.playerTurn.id).toEqual(component.players[0].id);

    component.draw(3);

    expect(component.playerTurn.id).toEqual(component.players[1].id);

    const el = fixture.nativeElement;
    const numberOfMatchesDisplayed = el.querySelectorAll('img').length;
    expect(numberOfMatchesDisplayed - 3).toBe(component.nbOfMatches.length);

  });

});
