"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var component = new like_1.LikeComponent(100, true);
component.onClick();
console.log(component.totalLike);
component.onClick();
console.log(component.totalLike);
//# sourceMappingURL=main.js.map