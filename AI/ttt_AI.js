
function score(board) {
  var humanPlayer = board.players[0];
  var aiPlayer = board.players[1];

  var scoreObj ={
    row:0,
    col:0,
    val:null
  };
  
  if (board.isDraw()) {
    scoreObj.val = 0;
    return scoreObj;
  } //returns score of 0 for a draw
  else if (board.playerWin() === humanPlayer) {
    scoreObj.val = -1;
    return scoreObj;
  } //returns score of -1 if the minimizing player O wins
  else if (board.playerWin() === aiPlayer) {
    scoreObj.val = 1;
    return scoreObj;
  }else{
    return scoreObj;
  } // returns null score if there is an invalid winner or no winner

}

function getBestOutcome(board, isMaximizingPlayer) {
  var currentScore = score(board);
   if (currentScore.val === 0) {
    return currentScore;
  } 
  else if (currentScore.val === 1) {
    return currentScore;
  }
   else if (currentScore.val === -1) {
    return currentScore;
  } 
  else {
  var humanPlayer = board.players[0];
  var aiPlayer = board.players[1];

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

    for (var row = 0; row < board.rows; row++) {

      for (var column = 0; column < board.columns; column++) {
       
        if (board.isValidMove(row, column)) {

          var newBoard = board.copyModel();

          if (isMaximizingPlayer) {

            newBoard.makeMove(row, column, aiPlayer);
             tempMove = getBestOutcome(newBoard, false);

            if (tempMove.val > bestMove.val) {
              bestMove = tempMove;
        
              bestMove.row = row;
              bestMove.col = column;

            }
          } else if (!isMaximizingPlayer) {
            
            newBoard.makeMove(row, column, humanPlayer);
            tempMove = getBestOutcome(newBoard, true);
            
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

var newestModel = new Model(3,3);


newestModel.board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

newestModel.playerTurn = 'X';
newestModel.moves = 0;
newestModel.players = ['X','O'];

// var newMod = newestModel.copyModel();
// console.log(newestModel);
// console.log(newestModel.board);
// console.log(newestModel.playerWin());
// console.log(newestModel.isGameOver());

// var bestMove = getBestOutcome(newestModel,true);
// console.log(newestModel.board);
// console.log(newestModel.isGameOver());
// console.log(getBestOutcome(newestModel, true));

