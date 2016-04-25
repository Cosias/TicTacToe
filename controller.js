//add event listener
var gameModel = document.getElementById("dynamicTable");
var newPlayer = document.getElementById("startGame");
var playerChoice = document.getElementsByName("player");
var newGame = document.getElementById("newGame");

function startNewGame(){
	newGame.addEventListener("click",function(){
		newestModel.newGame();
		console.log(newestModel.board);

	})
	}

startNewGame();


function startGame(){
	newPlayer.addEventListener("click",function(){
		if(playerChoice.value === "X"){
			newestModel.players=["O","X"];
		}
		else if(playerChoice.value === "O"){
				newestModel.players=["X","O"];
			}
		else{
			alert("Pick a player!!!");
			console.log(playerChoice);
		}
				
	})
// console.log(newestModel.players);
}

function addEventListeners(gameModel){
	for(var row = 0; row < newestModel.rows; row++){
		for(var column = 0; column < newestModel.columns; column++){
			// newestModel.makeMove(row,column,"X");
			gameModel.rows[row].cells[column].addEventListener("click",function(){
				if(newestModel.isValidMove(row,column)){
					newestModel.makeMove(row,column,'X');
					// console.log("click");
				}else{alert("try again");}
			})
		}
	}
}

addEventListeners(gameModel);
startGame();
