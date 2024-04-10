import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed: boolean = true;
  // @Output() changedContent = new EventEmitter<string>();

  // showContent(content: string) {
  //   this.changedContent.emit(content);
  // }
}
