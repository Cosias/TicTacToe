//add event listener
var gameView = document.getElementById("dynamicTable");
var newPlayer = document.getElementById("startGame");
var playerChoice = document.getElementsByName("player");
var newGame = document.getElementById("newGame");

function startNewGame(){
	newGame.addEventListener("click",function(){
		newestModel.newGame();
		console.log(newestModel.board);
		updateView();
		// console.log(newestModel);
	})
	}

startNewGame();


// function startGame(){
// 	newPlayer.addEventListener("click",function(){
// 		if(playerChoice.value === "X"){
// 			newestModel.players=["O","X"];
// 		}
// 		else if(playerChoice.value === "O"){
// 				newestModel.players=["X","O"];
// 			}
// 		else{
// 			alert("Pick a player!!!");
// 			console.log(playerChoice);
// 		}
				
// 	})
// // console.log(newestModel.players);
// }

function addEventListeners(gameView,gameModel){
	for(var row = 0; row < gameModel.rows; row++){
		for(var column = 0; column < gameModel.columns; column++){
			// newestModel.makeMove(row,column,"X");
				// console.log("row " + row);
				// console.log("col " + column);
				gameView.rows[row].cells[column].addEventListener("click",clickHandler)
			    console.log(row+ ' '+ column)
				// ,function(){
			
				// if(gameModel.isValidMove(row,column)){
				// 	gameModel.makeMove(row,column,'X');
				// 	console.log("click");
				// }else{alert("try again");}

			// })
		}
	}
}

function clickHandler(){
	// gameModel.makeMove(playerMove)
	// console.log("You clicked me!!");
	//newestModel.makeMove(0,1,newestModel.playerTurn);
	// console.log(this.parentNode.rowIndex + ' ' + this.cellIndex);
	// console.log(this.cellIndex);
	
	if(!newestModel.isGameOver()){
	newestModel.makeMove(this.parentNode.rowIndex,this.cellIndex,newestModel.playerTurn)
	// console.log(newestModel.board);
	updateView();

	if (newestModel.playerTurn === newestModel.players[1]) {
	// console.log("I am doing work");
	// var aiMove = getBestOutcome(newestModel,true);
	// newestModel.makeMove(aiMove.row,aiMove.col,newestModel.players[1]);
	// updateView();
	aiMove();

if (newestModel.isGameOver() && !(newestModel.isDraw())) {
		if(newestModel.playerWin()===newestModel.players[0]){
		alert("Congratulations Player " +newestModel.playerWin() + " Wins!!!")
	}else if(newestModel.playerWin()===newestModel.players[1]){
		alert("Sorry, You Lose!!!")
	}
	}else if (newestModel.isDraw()){
		alert("This Game Ended In a Draw!!!")
	}

}
	// gameModel.makeMove(1,0,gameModel.playerTurn);
	// console.log(gameModel.board);
}}

// console.log(newestModel.isValidMove(0,2));
console.log(newestModel);
// startGame();
addEventListeners(gameView,newestModel);

function updateView(){
	for (var r = 0; r<newestModel.rows;r++){
		for(var c = 0; c<newestModel.columns; c++){
			setCellText(r,c,newestModel.board[r][c])
		}
	}
}

function aiMove(){
	var aiMove = getBestOutcome(newestModel,true);
	newestModel.makeMove(aiMove.row,aiMove.col,newestModel.players[1]);
	updateView();
}

// if (newestModel.playerTurn === newestModel.players[1]) {
// 	console.log("I am doing work");
// 	var aiMove = getBestOutcome(newestModel,true);
// 	newestModel.makeMove(aiMove.row,aiMove.col,newestModel.player[1]);
// 	updateView();
// }

// updateView();

