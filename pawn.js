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
        const whiteMove = x === this.x - 1 || (x === this.x - 2 && this.moves == 0);
        const blackMove = x === this.x + 1 || (x === this.x + 2 && this.moves == 0);
        const whiteTake = x === this.x - 1 && y === this.y - 1 && containsPiece;
        const blackTake = x === this.x + 1 && y === this.y + 1 && containsPiece;

        return (whiteSide && ((whiteMove && !containsPiece && validY) 
            || (whiteTake && containsPiece && this.canTake(board.get(x, y))))) ||
            (blackSide && ((blackMove && !containsPiece && validY) || 
               (blackTake && containsPiece && this.canTake(board.get(x, y)))));
    }
}