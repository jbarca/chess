// abstract class that contains the basic functionality for a piece

class Piece {

    constructor(asset, side, x, y) {
        this.asset = asset;
        this.side = side;
        this.x = x;
        this.y = y;
    }

    canTake(otherPiece) {
        return (this.side === "WHITE" && otherPiece.side === "BLACK") ||
            (this.side === "BLACK" && otherPiece.side == "WHITE");
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    display(boardSize) {
        image(this.asset, (this.y * width / boardSize) + (width / ((boardSize * 2) + 1)), 
        (this.x * height / boardSize) + (height / ((boardSize * 2) + 1)), 40, 40);
    }

}