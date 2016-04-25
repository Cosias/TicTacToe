function getBestOutcome(boardPosition, isMaximizingPlayer) {
  // Precondition: boardPosition is an object representing the board's state,    
  //               boardPosition.rows, boardPosition.columns store the number   
  //               of rows and columns on the board, respectively    
  //               boardPosition.copy() returns a copy of the board with all  
  //               of its state (which spaces are occupied, who’s turn, etc.) 
  //               boardPosition.makeMove(row, col) makes the move for the   
  //               current player if it’s valid and returns true/false   
  //               depending on whether it is valid.     
  //               board.getWinner() returns the player who won or the empty  
  //               string if there is no winner    
  //               board.isGameOver() returns true if the game is over  
  //               isMaximizingPlayer is a Boolean   
  //               Anything else?   
  // Postcondition: If isMaximizingPlayer, for the player whose turn it is to     
  //                move, returns 1 if he/she can force a win, 0 if he/she  
  //                can avoid a loss but not force a win, -1 otherwise given 
  //                the boardPosition state of the game; returns the opposite  
  //                values in each situation if isMaximizingPlayer is false.                 
}

function score(){

  if (board.draw()){
    return 0
  }

  if (board.playerWin() === 'X'){
    return 1;
  }

  if (board.playerWin() === 'O'){
    return -1;
  }

}

function getBestOutCome(board, isMaximizingPlayer){
  
  // var levels = 9; 
    if(!board.isGameOver()){
      if (isMaximizingPlayer){
        for (var row = 0; row < board.rows; row++){
          for (var column = 0; column<board.columns; column++){
            board.makeMove(row,column,'X')
          }
        }
        return board.move();
      }

      if (!isMaximizingPlayer){
        for (var row = 0; row < board.rows; row++){
          for (var column = 0; column <board.columns; column++) {
            board.makeMove(row,column,'O')
          }
        }
        return board.move();
      }

      else{
        return null;
      }
    }
}
