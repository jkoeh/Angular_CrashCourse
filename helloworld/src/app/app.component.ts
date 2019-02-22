import { Component } from '@angular/core';
import {faCoffee, faMugHot} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app :D';
  faCoffee = faCoffee;
  faMugHot =faMugHot;

}
