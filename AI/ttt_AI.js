function Model(rows, columns) {
  var board = [];
  this.rows = rows;
  this.columns = columns;
  this.board = board;
  this.players = [];
  this.moves = 0;
  this.playerTurn = null;
  // this.winnerFound = false;

  for (var i = 0; i < rows; i++) {
    board.push([]);
    for (var j = 0; j < columns; j++) {
      board[i].push('');
    }
  }
}

var model = {

  constructor: Model,

  isDraw: function() {
    var draw = true;

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        if (this.board[i][j] === '') {
          draw = false;
        }
      }
    }
    return draw;
  }, //returns true if the game board is flled without a winner 

  isValidMove: function(row, column) {
    if (this.board[row][column] === 'X' || this.board[row][column] === 'O') {
      return false;
    } else {
      return true;
    }
  }, //if the row and the column has not yet been assigned return true 

  makeMove: function(row, column, string) {
    if (this.isValidMove(row, column)) {
      this.board[row][column] = string; //make assign that area of the board to to the txt value i.e. x or o 

      this.moves++;
      this.playerTurn = this.players[this.moves % this.players.length];
    } else {
      console.log('Not A Valid Move!');
    }

  }, //if isValidMove(row,column) update the game board otherwise alert the player that they are attempting to make an invalid move

  playerWin: function() {
    var rows = this.rows;
    var columns = this.rows;
    var winnner = null;

    for (var row = 0; row < rows; row++) {
      if (this.board[row][0] === this.board[row][1] & this.board[row][1] === this.board[row][2]) {
        winner = this.board[row][0];
        return winner;
      } //checks all columns in a row for matches
    }

    for (var column = 0; column < columns; column++) {
      if (this.board[0][column] === this.board[1][column] & this.board[1][column] === this.board[2][column]) {
        winner = this.board[0][column];
        return winner;
      } //checks all columns for a vertical matches 
    }

    if ((this.board[1][1] === this.board[0][0] & this.board[0][0] === this.board[2][2]) || (this.board[1][1] === this.board[0][2] & this.board[0][2] === this.board[2][0])) {
      winner = this.board[1][1];
      return winner;
    } //checks for diagonal matches
  },

  newGame: function() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        this.board[i][j] = '';
      }
    }
  },

  getPlayer: function(row, column) {
    return (this.board[row][column]);
  },//returns the player at a position on the board 

  copyModel: function() {
    var modelCopy = new Model(this.rows, this.columns);
    modelCopy.players = this.players;
    modelCopy.moves = this.moves;
    modelCopy.playerTurn = this.playerTurn;

    for (var r = 0; r < modelCopy.rows; r++) {
      for (var c = 0; c < modelCopy.columns; c++) {
        modelCopy.board[r][c] = this.board[r][c];
      }

    }
    return modelCopy;
  },//returns a copy of the model 

  isGameOver: function() {

    if (this.players.includes(this.playerWin()) || this.isDraw()) {
      //if (this.winnerFound === true){
      return true;
    } else {
      return false;
    }
  },//return true if a winner if found and in the list of players otherwise returns false 

  newPlayer: function(string) {
      this.players.push(string);
    } //takes in a players string variable 'X','O' and adds a new player with that given string 
};//adds a new player to the list of players 
  //player[1] will ultimately act as the AI player with player choosing to be x or o and making the 1st move 

Model.prototype = model;
var newModel = new Model(3, 3);
newModel.newPlayer("O");
newModel.newPlayer("X");



function score(board) {

  if (board.isDraw()) {
    return 0;
  } //returns score of 0 for a draw
  else if (board.playerWin() === 'O') {
    return -1;
  } //returns score of -1 if the minimizing player O wins
  else if (board.playerWin() === 'X') {
    return 1;
  } // returns score of 1 if the maximizing player X wins 
  else {
    return null;
  } // returns null score if there is an invalid winner or no winner

}

function getBestOutcome(board, isMaximizingPlayer) {
  var currentScore = score(board);

  if (currentScore === 0) {
    // console.log("Reached 0");
    return currentScore;
  } else if (currentScore === 1) {
    // console.log("reached 1");
    return currentScore;
  } else if (currentScore === -1) {
    // console.log("Reached -1");
    return currentScore;
  } else {
    var bestScore = -Infinity;
    var worstScore = Infinity;

    // var bestMove = null; //will hold the position of the best move 
    // var worstMove = null; //will hold the postiion of the worst move 
    
    var move = {
      row: null,
      col: null,
      val: null
    }; // object that holds the row and col of a move and the score val at that position 

    for (var row = 0; row < board.rows; row++) {

      for (var column = 0; column < board.columns; column++) {
       
        if (board.isValidMove(row, column)) {

          var newBoard = board.copyModel(row, column);

          if (isMaximizingPlayer) {

            newBoard.makeMove(row, column, board.players[1]);
            var x = getBestOutcome(newBoard, false);

            if (x > bestScore) {
              bestScore = x;
              bestMove = [row, column];
              move.row = row;
              move.col = column;
              move.val = bestScore;
            }
          } else if (!isMaximizingPlayer) {
            newBoard.makeMove(row, column, board.players[0]);
            var y = getBestOutcome(newBoard, true);
            
            if (y < worstScore) {
              worstScore = y;
              //worstMove = [row, column];
              move.row = row;
              move.col = column;
              move.val = worstScore;
            }
          }
        }
      }
      //console.log(bestScore +"****"+worstScore);
      //console.log("bestMove: "+ bestMove + " worstMove: " + worstMove);
      //console.log(board.board);
    }
    // if (isMaximizingPlayer) {
    //  return move;
    // } else {
    //    return move;
    // }
    return move;
  }
}

var newestModel = newModel.copyModel();

newestModel.board = [
  ['X', '', 'X'],
  ['O', '', 'X'],
  ['O', '', '']
];


console.log(newestModel.players);

var newMod = newestModel.copyModel();
// console.log(newestModel);
// console.log(newestModel.board);
// console.log(newestModel.playerWin());
// console.log(newestModel.isGameOver());

// var bestMove = getBestOutcome(newestModel,true);
console.log(newestModel.board);

console.log(getBestOutcome(newestModel, true));

