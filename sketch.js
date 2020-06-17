// drawing, IO, game logic, etc..

const boardSize = 8;
var board;
var pieces = [];

// TODO: Implement getValidMoves() function and display the valid moves
// when a piece is selected.

function preload() {
  // Load all the pieces in their initial positions
  for (var i = 0; i < boardSize; i++) {
    pieces.push(new Pawn(loadImage('assets/pawn_black.png'), "BLACK", 1, i));
    pieces.push(new Pawn(loadImage('assets/pawn_white.png'), "WHITE", 6, i));
  }

  pieces.push(new Rook(loadImage('assets/rook_white.png'), "WHITE", 7, 0));
  pieces.push(new Rook(loadImage('assets/rook_black.png'), "BLACK", 0, 0));
  pieces.push(new Knight(loadImage('assets/knight_white.png'), "WHITE", 7, 1));
  pieces.push(new Knight(loadImage('assets/knight_black.png'), "BLACK", 0, 1));
  pieces.push(new Bishop(loadImage('assets/bishop_white.png'), "WHITE", 7, 2));
  pieces.push(new Bishop(loadImage('assets/bishop_black.png'), "BLACK", 0, 2));
  pieces.push(new Queen(loadImage('assets/queen_white.png'), "WHITE", 7, 3));
  pieces.push(new Queen(loadImage('assets/queen_black.png'), "BLACK", 0, 3));
  pieces.push(new King(loadImage('assets/king_white.png'), "WHITE", 7, 4));
  pieces.push(new King(loadImage('assets/king_black.png'), "BLACK", 0, 4));
  pieces.push(new Bishop(loadImage('assets/bishop_white.png'), "WHITE", 7, 5));
  pieces.push(new Bishop(loadImage('assets/bishop_black.png'), "BLACK", 0, 5));
  pieces.push(new Knight(loadImage('assets/knight_white.png'), "WHITE", 7, 6));
  pieces.push(new Knight(loadImage('assets/knight_black.png'), "BLACK", 0, 6));
  pieces.push(new Rook(loadImage('assets/rook_white.png'), "WHITE", 7, 7));
  pieces.push(new Rook(loadImage('assets/rook_black.png'), "BLACK", 0, 7));
}

function setup() {
    createCanvas(400, 400);
    imageMode(CENTER);
    board = new Board(boardSize);

    for (var i = 0; i < pieces.length; i++) {
      board.addPiece(pieces[i], pieces[i].getX(), pieces[i].getY());
    }

    board.movePiece(1, 0, 2, 0);
    board.movePiece(6, 1, 4, 1);
    board.movePiece(2, 0, 3, 0);
    board.movePiece(4, 1, 3, 0);
    //board.movePiece(3, 0, 2, 0);
    //board.movePiece(3, 0, 4, 1);
}
  
function draw() {
  //background(220);

  // draw the grid
  for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
      if ((i + j) % 2 == 0) {
        fill(255);
      }
      else {
        fill(125);
      }
      if (board.get(i, j)) {
        if (board.get(i, j).getSelected()) {
          fill(255, 204, 0);
        }
      }

      rect(j * width / boardSize, i * height / boardSize, width / boardSize, height / boardSize);
      if (board.get(i, j)) {
        board.get(i, j).display(boardSize);
      }
    }
  }
}

function mouseClicked() {
  if (mouseButton === LEFT) {
    const x = floor(mouseX / (width / boardSize));
    const y = floor(mouseY / (height / boardSize));
    board.selectPiece(y, x);
  }
}