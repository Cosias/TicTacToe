function updateView(){
    
}

function bestOutcome (boardPosition, isMaximizingPlayer)
{
		if (isMaximizingPlayer)
		{
            
		}
}

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


    function playerWin(row,column)
    {

    	var boardCopy;
    	for (var i = 0; i<this.board.length;i++) 
    		{
    			boardCopy.push[this.board[i].slice()];
    			console.log(boardCopy);
    		}

for (var i = 0; i<=this.board.rows; i++)
{
    if(this.Board[i][0] === this.Board[i][1] & this.Board[i][1] === this.Board[i][2])
    {
        playerWin = true;
    }


}
for (var i = 0; i<=this.board.columns; i++)
    {
        if (this.Board[0][i] === this.board[1][i] & this.board[1][i] === this.board[2][i])
        {
            playerWin = true;
        }
    }

if (this.board[0][0] === this.board[1][1] & this.board[1][1] === this.board[2][2])
{
    playerWin = true;
}

if (playerWin = true)
{
    console.log("Congratulations player" + "you've won")

}



    	if (this.board[row][column] === this.board[row][column]  & this.board[row][column+1] === this.board[row][column+2])
    	{
    		winnerFound = true;
    	}//winner found across a row

    	else if(this.board[row][column] === this.board[row+1][column] & this.board[row+1][column] === this.board[row +2][column])
    	{
    		winnerFound = true;
    	}//winner found across a column

    	else if(this.board[row][column] === this.board[row+1][column+1] & this.board[row+1][column +1] === this.board[row +2][column +2])
    	{
    		winnerFound = true;
    	}//winner found across a diagonal

    	else if(this.board[row][column] === this.board[row][column])
    	{

    	}
    }          