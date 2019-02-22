export class LikeComponent {


    constructor(private _totalLike: number, private _clicked: boolean) {
    }
    onClick() {
        this._clicked = !this._clicked;
        this._totalLike += (this._clicked)? 1 : -1        
    }
    get totalLike() {
        return this._totalLike;
    }
    get clicked(){
        return this._clicked;
    }
}