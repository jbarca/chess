

class Rook extends Piece {
    constructor(asset, side, x, y) {
        super(asset, side, x, y);
    }

    isValidMove(x, y, board) {
        const obs = board.findObstruction(x, y, [0, -1]);
        const moveUp = y === this.y && board.get(x, y) === null && y <= obs[1];
        return moveUp;
    }
}