import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
}
