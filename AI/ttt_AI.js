function score(board) {

  var scoreObj ={
    row:0,
    col:0,
    val:null
  };
  
  if (board.isDraw()) {
    scoreObj.val = 0;
    return scoreObj;
  } //returns score of 0 for a draw
  else if (board.playerWin() === 'O') {
    scoreObj.val = -1;
    return scoreObj;
  } //returns score of -1 if the minimizing player O wins
  else if (board.playerWin() === 'X') {
    scoreObj.val = 1;
    return scoreObj;
  }else{
    return scoreObj;
  }
  // returns score of 1 if the maximizing player X wins 
  //else {
  //  return null;
  //} // returns null score if there is an invalid winner or no winner

}

function getBestOutcome(board, isMaximizingPlayer) {
  var currentScore = score(board);
  //console.log(currentScore);

  if (currentScore.val === 0) {
    // console.log("Reached 0");
    return currentScore;
  } else if (currentScore.val === 1) {
    // console.log("reached 1");
    return currentScore;
  } else if (currentScore.val === -1) {
    // console.log("Reached -1");
    return currentScore;
  } else {
    
    if (isMaximizingPlayer){
    
    var bestMove = {
      row:0,
      col:0,
      val:-Infinity
    };
    
    var tempMove = {
      row:0,
      col:0,
      val:-Infinity
     };
    }
    else if (!isMaximizingPlayer){
      
    var bestMove = {
      row: 0,
      col: 0,
      val: Infinity
    };
    
    var tempMove = {
      row: 0,
      col: 0,
      val: Infinity
    };
    }
    // object that holds the row and col of a move and the score val at that position 

    for (var row = 0; row < board.rows; row++) {

      for (var column = 0; column < board.columns; column++) {
       
        if (board.isValidMove(row, column)) {

          var newBoard = board.copyModel();

          if (isMaximizingPlayer) {

            newBoard.makeMove(row, column, "X");
             tempMove = getBestOutcome(newBoard, false);
             console.log(tempMove.val);

            if (tempMove.val > bestMove.val) {
              bestMove = tempMove;
              //bestMove = [row, column];
              bestMove.row = row;
              bestMove.col = column;
              //move.val = bestScore;
              //bestMove = x;
            }
          } else if (!isMaximizingPlayer) {
            
            newBoard.makeMove(row, column, "O");
            tempMove = getBestOutcome(newBoard, true);
            console.log(tempMove.val);
            if (tempMove.val < bestMove.val) {
              bestMove = tempMove;

              bestMove.row = row;
              bestMove.col = column;
            }
          }
        }
      }
    }
    return bestMove;
  }
}

var newestModel = newModel.copyModel();

newestModel.board = [
  ['X', '', 'O'],
  ['', 'O', 'X'],
  ['X', 'O', 'X']
];

var newMod = newestModel.copyModel();
// console.log(newestModel);
// console.log(newestModel.board);
// console.log(newestModel.playerWin());
// console.log(newestModel.isGameOver());

// var bestMove = getBestOutcome(newestModel,true);
console.log(newestModel.board);
console.log(newestModel.isGameOver());

console.log(getBestOutcome(newestModel, true));

