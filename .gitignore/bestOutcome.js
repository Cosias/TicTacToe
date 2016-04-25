// function updateView(){
    
// }

function bestOutcome (boardPosition, isMaximizingPlayer) // T/F for maxPlayer 
{
		var score = null;
        var min = -1;
        var max = 1;
        var draw = 0;


        boardCopy = boardPosition.copy();


        
        if (boardCopy.playerWin() === 'X';){
            score = 1;
        }

        if (boardCopy.isDraw()){
            score = 0;
        }

        if (boardCopy.playerWin() === 'O'){
            score = -1;
        }


        if (isMaximizingPlayer)
		{
            // boardCopy = boardPosition.copy();
            return score if this.isGameOver();

            var moveMade = false;

            while (!moveMade) {
                for(var i = 0; i<boardCopy.rows; i++){
                    for(var k = 0; k<boardCopy.columns; k++){
                        if(isValidMove(boardCopy.board[i][k])){
                            makeMove(i,k,isMaximizingPlayer);
                            moveMade = true;
                        }
                    }
                }

            }
		} // if true maximizing player then that player ex: X will make the move that will result in a score of 1 a win for the max player 

            // if false then the minimizing  ex: player O will make the move that will result in a  a score of -1 or 0 a loss for the max player or a draw 
}
 // Copy board then observe all possible outcomes from a possible move made from that cuurent version of the board and all of its children 
 // If you are the maximizing player looking for a draw or max 
 // If the  minimizing player go for draw or a min 
 // If two in the same row make next move in that row 
 // If the opponent has two in a row, block them by making a move in that row 
 // 

//BASE CASE win = 1; loss = -1; draw = 0 


    if (isMaximizingPlayer){
        //return the greatest outcome of the minimax recursively 

    }

    else{
        // return the minimum outcome of the minimax recursiveky 
    }    
for(var row = 0; row<boardPosition.rows; row++){
    for(var column = 0; column<boardPosition.columns; column++){
        aiMove(row,column,isMaximizingPlayer)
    }
}
function aiMove(row,column,player){
    var play = 'O';

    if(player){ 
        play = "X";
    }
    board.makeMove(row,column,play);
}//use memoization to keep track of all of the possible outcomes of a move at a position

if (isMaximizingPlayer){
    for(board.rows){
        for(board.columns){
            board.makeMove()
            
            if board()
        }
    }
}