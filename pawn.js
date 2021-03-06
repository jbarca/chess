// a class representing a pawn

class Pawn extends Piece {
    constructor(asset, side, x, y) {
        super(asset, side, x, y);
    }

    isValidMove(x, y, board) {
        const validY = this.y === y;
        const containsPiece = board.get(x, y) !== null;
        const whiteSide = this.side === "WHITE";
        const blackSide = this.side === "BLACK";
        const whiteMove = x === this.x - 1 || (x === this.x - 2 && this.moves == 0 &&
            board.get(this.x - 1, y) === null);
        const blackMove = x === this.x + 1 || (x === this.x + 2 && this.moves == 0 &&
            board.get(this.x + 1, y) === null);
        const whiteTakeLeft = x === this.x - 1 && y === this.y - 1 && containsPiece;
        const whiteTakeRight = x === this.x - 1 && y === this.y + 1 && containsPiece;
        const blackTakeLeft = x === this.x + 1 && y === this.y + 1 && containsPiece;
        const blackTakeRight = x === this.x + 1 && y === this.y - 1 && containsPiece;

        return (whiteSide && ((whiteMove && !containsPiece && validY) ||
                (whiteTakeLeft && this.canTake(board.get(x, y))) || 
                (whiteTakeRight && this.canTake(board.get(x, y)))) ||
            (blackSide && ((blackMove && !containsPiece && validY) ||
                (blackTakeLeft && this.canTake(board.get(x, y))) || 
                (blackTakeRight && this.canTake(board.get(x, y))))));
    }
}