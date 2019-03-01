import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet ={
    body: "This is the body..",
    likeCount: 30,
    isLiked: false
  }
  onLikeChange(event){
    this.tweet.likeCount = event.likeCount;
    this.tweet.isLiked = event.isLiked;
    console.log("hi");
  }
}
