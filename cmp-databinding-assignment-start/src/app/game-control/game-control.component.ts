import {Component, EventEmitter, Output} from '@angular/core';
import {sequence} from "@angular/animations";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() gameStatus = new EventEmitter<{sequence: number}>();
  sequence = 0;
  intervalId: number = null;

  startGame() {
    this.intervalId = setInterval(() => {
      this.sequence++;
      this.gameStatus.emit({sequence: this.sequence});
    }, 1000)
  }

  stopGame() {
    clearInterval(this.intervalId);
  }
}
