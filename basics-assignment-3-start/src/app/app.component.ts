import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false;
  output = [];


  showDetails() {
    this.showPassword = !this.showPassword;
    let now = new Date();
    this.output.push(now);
  }

  getColor(id:number) {
    if(id > 4) {
      return "blue";
    }
    return "";
  }
}
