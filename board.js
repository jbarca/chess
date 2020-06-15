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

    getBoard() {
        var newBoard = [];
        this.constructBoard(newBoard);
        return newBoard;
    }

}