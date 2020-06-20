// class that represents the game board and its states

class Board {
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.board = [];
        this.currentlySelected = null;
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

    // finish this function to determine if a piece is in the way of the
    // straight line in direction dir.
    findObstruction(x, y, dir) {
        var curr_loc = [x, y];
        while (this.board[curr_loc[0]][curr_loc[1]] === null
            && curr_loc[0] + dir[0] >= 0 && curr_loc[0] + dir[0] < this.boardSize
            && curr_loc[1] + dir[1] >= 0 && curr_loc[1] + dir[1] < this.boardSize) {
            curr_loc[0] += dir[0];
            curr_loc[1] += dir[1];
        }
        return curr_loc;
    }

    isValidMove(piece, x, y) {
        return piece.isValidMove(x, y, this);
    }

    addPiece(newPiece, x, y) {
        this.board[x][y] = newPiece;
    }

    selectPiece(x, y) {
        if (this.board[x][y] !== null) {
            if (this.currentlySelected !== null) {
                this.currentlySelected.setSelected(false);
            }
            if (this.currentlySelected == this.board[x][y]) {
                this.currentlySelected.setSelected(false);
                this.currentlySelected = null;
            }
            else {
                this.currentlySelected = this.board[x][y];
                this.currentlySelected.setSelected(true);
            }
        }
    }

    getSelected() {
        return this.currentlySelected;
    }

    getBoard() {
        var newBoard = [];
        this.constructBoard(newBoard);
        return newBoard;
    }

    getValidMoves(x, y) {
        var validMoves = [];
        var piece = this.board[x][y];
        if (piece !== null) {
            for (var i = 0; i < boardSize; i++) {
                for (var j = 0; j < boardSize; j++) {
                    if (this.isValidMove(piece, i, j)) {
                        validMoves.push([i, j]);
                    }
                }
            }
        }
        return validMoves;
    }

}