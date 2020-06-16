// a class representing a pawn

class Pawn extends Piece {
    constructor(asset, side, x, y) {
        super(asset, side, x, y);
    }

    isValidMove(x, y, board) {
        return (this.side === "WHITE" && this.y === y
            && (x === this.x - 1 || (x === this.x - 2 && this.moves == 0)) 
            && board.get(x, y) === null) ||
            (this.side === "BLACK" && this.y == y && 
            (x === this.x + 1 || (x === this.x + 2 && this.moves == 0)) 
            && board.get(x, y) === null);
    }
}