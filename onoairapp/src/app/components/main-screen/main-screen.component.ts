import { Component } from '@angular/core';

@Component({
  selector: 'main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
  onButtonClick() {
    alert('Button clicked!');
  }
}