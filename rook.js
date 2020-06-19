

class Rook extends Piece {
    constructor(asset, side, x, y) {
        super(asset, side, x, y);
    }

    isValidMove(x, y, board) {
        const moveUp = y === this.y && board.get(x, y) === null;
        return moveUp;
    }
}