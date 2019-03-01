import { Component } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title:'Angular app :D',
    isFavorite: true
  }
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log(`fav changed to ${eventArgs.newValue}`);
  }

}
