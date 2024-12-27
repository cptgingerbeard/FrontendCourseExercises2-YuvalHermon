
import { Component } from '@angular/core';
import { AppMainScreenComponent } from './components/main-screen/main-screen.component';



@Component({

  selector: 'app-root',

  imports: [AppMainScreenComponent],

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'onoairapp';

}
