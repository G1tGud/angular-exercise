import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent implements OnInit {
  @Input() oddNumber: string;

  ngOnInit(): void {
    console.log("Odd init")
  }
}
