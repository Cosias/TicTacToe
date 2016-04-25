function score(board){

  if (board.isDraw()){
    return 0;
  }//returns score of 0 for a draw

  else if (board.playerWin() === 'O'){
    return -1;
  }//returns score of -1 if the minimizing player O wins

  else if (board.playerWin() === 'X'){
    return 1;
  }// returns score of 1 if the maximizing player X wins 

  else {
    return null;
  }// returns null score if there is an invalid winner

}

function getBestOutCome(board, isMaximizingPlayer){
  
  // var levels = 9; 
  	// var scores = [];
  	// var moves = [];
  	
  	var bestScore = -Infinity;
  	var worstScore = Infinity;
  	
    

  	if (board.isGameOver()){
  		// return board.playerWin();
      return score(board);
  	}
  	
  	else{
  		newBoard = board.copyModel();
  		// scores.push(getBestOutCome(newBoard,playerTurn));
  		// moves.push(newBoard.move);
  	// }
  	
    // for(var depth = 0; depth<board.rows * board.columns; depth++){
    
    // newBoard = board.copyModel();
    
    // if(!(newBoard.isGameOver())){
    	
      if (isMaximizingPlayer === true){
        for (var row = 0; row < board.rows; row++){
          for (var column = 0; column<newBoard.columns; column++){
            newBoard.makeMove(row,column,'X');

            var x = getBestOutCome(newBoard,!isMaximizingPlayer);

            if (bestScore < x){
              bestScore = x;
            }
          }
        }
        // var x = move(newBoard);
        // return x;
      }

      else if (isMaximizingPlayer === false){
        for (var roww = 0; roww < board.rows; roww++){
          for (var columnn = 0; columnn <newBoard.columns; columnn++) {
            newBoard.makeMove(roww,colummn,'O');
            
            var x = getBestOutCome(newBoard,!isMaximizingPlayer);

            if(worstScore > x){
              worstScore = x;
          }
        }
      }
        // var y = move(newBoard);
        // return y;
      }
    }

    return isMaximizingPlayer ? bestScore:worstScore; 
    
    // }
// }
	
}