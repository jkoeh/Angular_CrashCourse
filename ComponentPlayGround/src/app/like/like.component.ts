import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input("isLiked") isSelected: boolean;
  @Input("likeCount") likeCount: number;
  @Output("onLikeChange") change= new EventEmitter();
  onClick(){
    this.isSelected = !this.isSelected;
    this.likeCount += (this.isSelected)? 1: -1;
    this.change.emit({likeCount: this.likeCount, isLiked: this.isSelected});
  }
}
