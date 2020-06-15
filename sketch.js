// drawing, IO, game logic, etc..

var board;
const boardSize = 8;

function setup() {
    createCanvas(400, 400);
    board = new Board(8);
  }
  
  function draw() {
    background(220);

    // draw the grid
    for (var i = 0; i < boardSize; i++) {
        for (var j = 0; j < boardSize; j++) {
            rect(j * width / boardSize, i * height / boardSize, width / boardSize, height / boardSize);
        }
    }


  }