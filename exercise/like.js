"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_totalLike, _clicked) {
        this._totalLike = _totalLike;
        this._clicked = _clicked;
    }
    LikeComponent.prototype.onClick = function () {
        this._clicked = !this._clicked;
        this._totalLike += (this._clicked) ? 1 : -1;
    };
    Object.defineProperty(LikeComponent.prototype, "totalLike", {
        get: function () {
            return this._totalLike;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "clicked", {
        get: function () {
            return this._clicked;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.js.map