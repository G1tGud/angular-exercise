import {Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ContentChild("gameStatus", {static: true}) gameStatus: ElementRef;
  gameStatus: {sequence: number} = { sequence: 0 };
  oddNumbers = []
  evenNumbers = []

  setGameStatus(gameStatus: {sequence: number}) {
    this.gameStatus = gameStatus;
    if(gameStatus.sequence % 2 == 0) {
      this.evenNumbers.push(gameStatus.sequence);
    } else {
      this.oddNumbers.push(gameStatus.sequence)
    }
  }
}
