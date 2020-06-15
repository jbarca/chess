// drawing, IO, game logic, etc..

const boardSize = 8;
var board;
var pieces = [];

function preload() {
  pieces.push(new Pawn(loadImage('assets/pawn_white.png'), "WHITE", 1, 0));
  pieces.push(new Pawn(loadImage('assets/pawn_white.png'), "WHITE", 6, 0));
}

function setup() {
    createCanvas(400, 400);
    imageMode(CENTER);
    board = new Board(boardSize);

    for (var i = 0; i < pieces.length; i++) {
      board.addPiece(pieces[i], pieces[i].getX(), pieces[i].getY());
    }
}
  
function draw() {
  background(220);

  // draw the grid
  for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
      if ((i + j) % 2 == 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(j * width / boardSize, i * height / boardSize, width / boardSize, height / boardSize);
      if (board.get(i, j)) {
        board.get(i, j).display(boardSize);
      }
    }
  }
}