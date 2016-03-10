
function Model(rows,columns)
{
	var board = [];
	this.rows = rows;
	this.columns = columns;
	this.board = board;

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
			    
				//if((gameBoard[i][j]) === "X" || (gameBoard[i][j]) === "O" )
				if(this.board[i][j] === '')
				{
					draw = false;
				}
			}
		//}
	    }
		return draw;

	},//returns true if the game board is flled without a winner 



	isValidMove: function(row,column,string)
	{
		if (this.board[row][column] === 'X' || this.board[row][column] === 'O')
		{
			return false;
		}
		
		else return true;
	},//if the row and the column has not yet been assigned return true 

	makeMove: function(row,column,string)
	{
		if(this.isValidMove(row,column,string))
		{
			this.board[row][column] = string;//make assign that area of the board to to the txt value i.e. x or o 
			
		}

		else alert('Not A Valid Move!');

	},//if isValidMove(row,column) update the game board otherwise alert the player that they are attempting to make an invalid move

	playerWin: function()
	{
	    var rows = this.rows;
	    var columns = this.rows;
	    
	    
	    for (var row = 0; row<rows;row++)
	    {
		if (this.board[row][0]=== this.board[row][1] & this.board[row][1] === this.board[row][2])
		{
			console.log( "Congratulations " + this.board[row][0] + " wins!!!");
		} //checks all columns in a row for matches
	    }
	    
	    for (var column = 0; column<columns;column++)
	    {
		 if (this.board[0][column] === this.board[1][column] & this.board[1][column] === this.board[2][column])
		{
			console.log( "Congratulations " + this.board[0][column] + " wins!!!");

		}//checks all columns for a vertical matches 
        }
        
		if ((this.board [1][1] === this.board[0][0] & this.board[0][0] === this.board[2][2]) ||(this.board[1][1] === this.board[0][2] & this.board[0][2] === this.board[2][0]))
		{
			console.log( "Congratulations " + this.board[1][1] + " wins!!!");
		}//checks for diagonal matches
		
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
	}


	copy: function(){
	    
	    function copyObject(obj) {
    
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
 
    var temp = new obj.constructor(); // give temp the original obj's constructor
    for (var key in obj) {
        temp[key] = copyObject(obj[key]);
    }
 
    return temp;
}

 var newObj = copyObject(this);
 return newObj;

	},
	}


	
};

Model.prototype = model;
Model m = new Model(3,3);


function View(model,callback){
	callback(tableCell,row,column)
}

View v = new View(m,function(tableCell,row,column){

//function addElements(table){}	//Dynamic table
// document.getElementById("DynamicTable").addEventListener("click",alert("I've been clickeds"));