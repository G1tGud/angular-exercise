import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UsersService} from "./users.service";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  activeToInactiveCounter: number;
  inactiveToActiveCounter: number;

  constructor(private counterService: CounterService) {
  }

  // ngOnInit(): void {
  //   this.activeToInactiveCounter = this.counterService.activeToInactiveCounter;
  //   this.inactiveToActiveCounter = this.counterService.inactiveToActiveCounter;
  // }
  //
  // ngOnChanges(changes: SimpleChanges) {
  //   this.activeToInactiveCounter = this.counterService.activeToInactiveCounter;
  //   this.inactiveToActiveCounter = this.counterService.inactiveToActiveCounter;
  // }

  public getActiveToInactiveCount() {
    return this.counterService.activeToInactiveCounter;
  }

  public getInactiveToActiveCount() {
    return this.counterService.inactiveToActiveCounter;
  }

}
