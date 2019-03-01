import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent  {
  //using an alias prevent changes in the component class from affect the clients
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();
  onClick(){    
    this.isSelected = !this.isSelected; 
    this.click.emit({newValue: this.isSelected} );   
  }
}
export interface FavoriteChangedEventArgs{
  newValue: boolean
}