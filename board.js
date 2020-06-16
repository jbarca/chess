// class that represents the game board and its states

class Board {
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.board = [];
        this.constructBoard(this.board);
    }

    constructBoard(board) {
        for (var i = 0; i < this.boardSize; i++) {
            var inner = [];
            for (var j = 0; j < this.boardSize; j++) {
                inner.push(null);
            }
            board.push(inner);
        }
    }

    get(x, y) {
        return this.board[x][y];
    }

    movePiece(x1, y1, x2, y2) {
        var piece = this.board[x1][y1];
        if (this.isValidMove(piece, x2, y2)) {
            piece.move(x2, y2);
            this.board[x1][y1] = null;
            this.board[x2][y2] = piece;
        }
    }

    isValidMove(piece, x, y) {
        return piece.isValidMove(x, y, this);
    }

    addPiece(newPiece, x, y) {
        this.board[x][y] = newPiece;
    }

    getBoard() {
        var newBoard = [];
        this.constructBoard(newBoard);
        return newBoard;
    }

}