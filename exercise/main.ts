import {LikeComponent} from './like';    

let component = new LikeComponent(100, true);
component.onClick();
console.log(component.totalLike);
component.onClick();
console.log(component.totalLike);

