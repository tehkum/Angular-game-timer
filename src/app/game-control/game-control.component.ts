import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  counter: number = 0;
  intervalId: any;
  gameStarted: boolean = false;
  scoreBoard: number[] = [];

  startGame() {
    this.gameStarted = true;
    this.intervalId = setInterval(() => {
      this.counter++;
      this.scoreBoard.push(this.counter);
    }, 1000);
  }

  stopGame() {
    this.gameStarted = false;
    clearInterval(this.intervalId);
  }

  resetGame() {
    this.gameStarted = false;
    clearInterval(this.intervalId);
    this.counter = 0;
    this.scoreBoard = [];
  }
}
