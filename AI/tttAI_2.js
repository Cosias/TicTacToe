function getBestOutCome(board, player){
  
  // var levels = 9; 
  	var scores = [];
  	var moves = [];
  	
  	var bestScore = -Infinity;
  	var worstScore = Infinity;
  	
  	if (board.isGameOver){
  		return board.playerWin();
  	}
  	
  	else{
  		newBoard = board.copyModel();
  		scores.push(getBestOutCome(newBoard,playerTurn));
  		moves.push(newBoard.move);
  	}
  	
    // for(var depth = 0; depth<board.rows * board.columns; depth++){
    
    // newBoard = board.copyModel();
    
    // if(!(newBoard.isGameOver())){
    	
      if (playerTurn === "X"){
        for (var row = 0; row < board.rows; row++){
          for (var column = 0; column<newBoard.columns; column++){
          	
            newBoard.makeMove(row,column,'X');
            newBoard.move = [row,column];
          }
        }
        var x = move(newBoard);
        return x;
      }

      else if (playerTurn === "O"){
        for (var roww = 0; roww < board.rows; roww++){
          for (var columnn = 0; columnn <newBoard.columns; columnn++) {
            newBoard.makeMove(roww,colummn,'O');
            newBoard.move = [roww,columnn];
          }
        }
        var y = move(newBoard);
        return y;
      }

      else{
        return null;
      }
    // }
// }
	
}