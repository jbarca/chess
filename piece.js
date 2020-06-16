// abstract class that contains the basic functionality for a piece

class Piece {

    constructor(asset, side, x, y) {
        this.asset = asset;
        this.side = side;
        this.x = x;
        this.y = y;
        this.moves = 0;
    }

    canTake(otherPiece) {
        return (this.side === "WHITE" && otherPiece.side === "BLACK") ||
            (this.side === "BLACK" && otherPiece.side == "WHITE");
    }

    move(x, y) {
        this.moves++;
        this.x = x;
        this.y = y;
    }

    isValidMove(x, y, board) {
        // Implemented in sub-classes
        return true;
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