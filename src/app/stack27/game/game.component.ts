import { Component, OnInit } from '@angular/core';
import { Card, Game, Stack27Service, Stacks } from '../stack27.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game = {
    stacks: [],
    round: 0
  }

  constructor(private service: Stack27Service) { }

  ngOnInit(): void {
    this.restart()
  }

  selectStack(index: number) {
    this.game = this.service.turn(this.game, index)
  }

  restart() {
    this.game = this.service.newGame()
  }
}
