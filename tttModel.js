"use strict";

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
    if (this.isGameOver() && !this.players.includes(this.playerWin())){
    	return true;
    }else{
    	return false;
    }
  }, //returns true if the game board is flled without a valid winner 

  isValidMove: function(row, column) {
    if (this.board[row][column] !== '') {
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
    var winner = null;

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
  	
    var boardFull = true;
    for(var i = 0; i<this.rows;i++){
    	for (var j =0; j<this.columns;j++){
    		if (this.board[i][j] === ''){ boardFull = false;}
    	}}
    if(this.players.includes(this.playerWin()) || boardFull){
    	return true;
    }else{return false;}
  },//return true if a winner if found and in the list of players otherwise returns false 

  newPlayer: function(string) {
      this.players.push(string);
    } //takes in a players string variable 'X','O' and adds a new player with that given string 
};//adds a new player to the list of players 
  //player[1] will ultimately act as the AI player with player choosing to be x or o and making the 1st move 

Model.prototype = model;
var newModel = new Model(3, 3);
newModel.newPlayer("X");
newModel.newPlayer("O");


// function score(board) {
//   var humanPlayer = board.players[0];
//   var aiPlayer = board.players[1];

//   var scoreObj ={
//     row:0,
//     col:0,
//     val:null
//   };
  
//   if (board.isDraw()) {
//     scoreObj.val = 0;
//     return scoreObj;
//   } //returns score of 0 for a draw
//   else if (board.playerWin() === humanPlayer) {
//     scoreObj.val = -1;
//     return scoreObj;
//   } //returns score of -1 if the minimizing player O wins
//   else if (board.playerWin() === aiPlayer) {
//     scoreObj.val = 1;
//     return scoreObj;
//   }else{
//     return scoreObj;
//   }
//   // returns score of 1 if the maximizing player X wins 
//   //else {
//   //  return null;
//   //} // returns null score if there is an invalid winner or no winner

// }

// function getBestOutcome(board, isMaximizingPlayer) {
//   var currentScore = score(board);
//   console.log(currentScore);
//    if (currentScore.val === 0) {
//     // console.log("Reached 0");
//     return currentScore;
//   } else if (currentScore.val === 1) {
//     // console.log("reached 1");
//     return currentScore;
//   } else if (currentScore.val === -1) {
//     // console.log("Reached -1");
//     return currentScore;
//   } else {
//   var humanPlayer = board.players[0];
//   var aiPlayer = board.players[1];

//   // if(board.isDraw()){
//   //   return 0;
//   // }//Game ends in draw 
//   // else if (board.playerWin() === humanPlayer){
//   //   return -1;
//   // }//Human player wins
//   // else if (board.playerWin() === aiPlayer){
//   //   return 1;
//   // }//Ai player wins
//   // else{
  
//     if (isMaximizingPlayer){
    
//     var bestMove = {
//       row:0,
//       col:0,
//       val:-Infinity
//     };
    
//     var tempMove = {
//       row:0,
//       col:0,
//       val:-Infinity
//      };
//     }
//     else if (!isMaximizingPlayer){
      
//     var bestMove = {
//       row: 0,
//       col: 0,
//       val: Infinity
//     };
    
//     var tempMove = {
//       row: 0,
//       col: 0,
//       val: Infinity
//     };
//     }
//     // object that holds the row and col of a move and the score val at that position 

//     for (var row = 0; row < board.rows; row++) {

//       for (var column = 0; column < board.columns; column++) {
       
//         if (board.isValidMove(row, column)) {

//           var newBoard = board.copyModel();

//           if (isMaximizingPlayer) {

//             newBoard.makeMove(row, column, aiPlayer);
//              tempMove = getBestOutcome(newBoard, false);
//              console.log(tempMove.val);

//             if (tempMove.val > bestMove.val) {
//               bestMove = tempMove;
//               //bestMove = [row, column];
//               bestMove.row = row;
//               bestMove.col = column;
//               //move.val = bestScore;
//               //bestMove = x;
//             }
//           } else if (!isMaximizingPlayer) {
            
//             newBoard.makeMove(row, column, humanPlayer);
//             tempMove = getBestOutcome(newBoard, true);
//             console.log(tempMove.val);
//             if (tempMove.val < bestMove.val) {
//               bestMove = tempMove;

//               bestMove.row = row;
//               bestMove.col = column;
//             }
//           }
//         }
//       }
//     }
//     return bestMove;
//   }
// }

// var newestModel = new Model(3,3);


// newestModel.board = [
//   ['X', '', 'O'],
//   ['', 'O', 'X'],
//   ['X', 'O', 'X']
// ];

// // var newMod = newestModel.copyModel();
// // console.log(newestModel);
// // console.log(newestModel.board);
// // console.log(newestModel.playerWin());
// // console.log(newestModel.isGameOver());

// // var bestMove = getBestOutcome(newestModel,true);
// console.log(newestModel.board);
// console.log(newestModel.isGameOver());
// console.log(getBestOutcome(newestModel, true));



