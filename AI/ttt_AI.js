
function Model(rows,columns)
{
  var board = [];
  this.rows = rows;
  this.columns = columns;
  this.board = board;
  this.players = [];
  this.moves = 0;
  this.playerTurn = null;
  // this.winnerFound = false;

  for(var i = 0;i <rows; i++)
  {
    board.push([]);
    for(var j = 0; j<columns;j++)
    {
      board[i].push('');
    }

  }
}

var model = {
  
  constructor: Model,
  
  isDraw: function()
  {
      var draw = true;
     // while (draw === true){
     
     
    for (var i = 0; i<this.rows; i++)
    {
      for(var j = 0; j<this.columns; j++)
      {
        if(this.board[i][j] === '')
        {
          draw = false;
        }
      }
    //}
      }
    return draw;
  },//returns true if the game board is flled without a winner 

  isValidMove: function(row,column)
  {
    if (this.board[row][column] === 'X' || this.board[row][column] === 'O')
    {
      return false;
    }
    
    else{
     return true;
    }
  },//if the row and the column has not yet been assigned return true 

  makeMove: function(row,column,string)
  {
    if(this.isValidMove(row,column))
    {
      this.board[row][column] = string;//make assign that area of the board to to the txt value i.e. x or o 
      
      this.moves++;
      this.playerTurn = this.players[this.moves % this.players.length];
    }

    else {
      alert('Not A Valid Move!');
      
    }

  },//if isValidMove(row,column) update the game board otherwise alert the player that they are attempting to make an invalid move

  playerWin: function()
  {
      var rows = this.rows;
      var columns = this.rows;
      var winnner = null;
      
      for (var row = 0; row<rows;row++)
      {
    if (this.board[row][0]=== this.board[row][1] & this.board[row][1] === this.board[row][2])
    {
      //console.log( "Congratulations " + this.board[row][0] + " wins!!!");
      winner = this.board[row][0];
      return winner;
    } //checks all columns in a row for matches
      }
      
      for (var column = 0; column<columns;column++)
      {
     if (this.board[0][column] === this.board[1][column] & this.board[1][column] === this.board[2][column])
    {
      //console.log( "Congratulations " + this.board[0][column] + " wins!!!");
      winner = this.board[0][column];
      return winner;
    }//checks all columns for a vertical matches 
        }
        
    if ((this.board [1][1] === this.board[0][0] & this.board[0][0] === this.board[2][2]) ||(this.board[1][1] === this.board[0][2] & this.board[0][2] === this.board[2][0]))
    {
      //console.log( "Congratulations " + this.board[1][1] + " wins!!!");
      winner = this.board[1][1];
      return winner;
    }//checks for diagonal matches
    
    // if (this.players.includes(winner)){
       // this.winnerFound = true;
        //return winner;
    // }
  },
  
  newGame: function(){
      for(var i = 0;i <this.rows; i++)
  {
    for(var j = 0; j<this.columns;j++)
    {
      this.board[i][j] = '';
    }
  }
  },
  
  getPlayer: function(row,column){
      return (this.board[row][column]);
  },
  
  copyModel: function(){
    var modelCopy = new Model(this.rows,this.columns);
    // modelCopy.prototype = model;
    // modelCopy.rows = this.rows;
    // modelCopy.columns = this.columns;
    modelCopy.players = this.players;
    // modelCopy.moves = this.moves;
    modelCopy.playerTurn = this.playerTurn;
  
    
    
    for(var r = 0; r<modelCopy.rows; r++){
      // modelCopy.board[r] = [''];
      for(var c = 0; c<modelCopy.columns; c++){
        modelCopy.board[r][c] = this.board[r][c];
      }
      
    }
    return modelCopy;
  },
  
  isGameOver: function(){
     
   if (this.players.includes(this.playerWin()) || this.isDraw()){

     //if (this.winnerFound === true){
      return true;
     }
     else{
      return false;
     }
    
  },

  newPlayer: function(string){
      this.players.push(string);
      
  }//takes in a players string variable 'X','O' and adds a new player with that given string 
};

Model.prototype = model;
var newModel = new Model(3,3);
newModel.newPlayer("X");
newModel.newPlayer("O");


var newestModel = newModel.copyModel();

newestModel.board = [['X','O','X'],
           ['','O',''],
           ['O','','O']];



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

function getBestOutcome(board,isMaximizingPlayer){
  var currentScore = score(board);
  if (currentScore === 0){
    console.log("Reached 0");
    return currentScore;
  }

  else if (currentScore === 1) {
    console.log("reached 1");
    return currentScore;
  }

  else if (currentScore === -1) {
    console.log("Reached -1");
    return currentScore;
  }
  //if (board.isDraw()){return 0;}
  //else if(board.playerWin() == "X"){return 1;}
  //else if(board.playerWin() == "O"){return -1;}

    else{
      var bestScore = -Infinity;
      var worstScore = Infinity;

      for(var row = 0; row<board.rows; row++){
        
        for (var column = 0; column<board.columns; column++){
          if(board.isValidMove(row,column)){
            

            if (isMaximizingPlayer) {
            board.makeMove(row,column,"X");
            var newBoard = board.copyModel(row,column);
              var x = getBestOutcome(newBoard,false);

              if(x > bestScore){
                bestScore = x;
              }
            }

            else if(!isMaximizingPlayer){
              board.makeMove(row,column,"O");
              var newBoard2 = board.copyModel(row,column);
              var y = getBestOutcome(newBoard2,true);
              if(y<worstScore){
                worstScore = y;
              }
            }        
        }
      }
     //console.log(bestScore +"****"+worstScore);
    }
    if (isMaximizingPlayer){
      return bestScore;
    }
    else {
      return worstScore;
    }
  }
}

console.log("----------------------------------");

console.log(newestModel);
console.log(newestModel.board);
// console.log(newestModel.board);
// console.log(newestModel.playerWin());
console.log(newestModel.isGameOver());

console.log(getBestOutcome(newestModel,false));