import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
  @Input("isLiked") isLiked: boolean;
}
