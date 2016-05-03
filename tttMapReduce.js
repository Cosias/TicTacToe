function score(gameModel) {
	
  if (gameModel.board.isDraw()) {
   return 2; 
  } 
  else if (gameModel.board.playerWin() === gameModel.players[1]) {
    scoreObj.val = 3;
  } 
  else if (gameModel.board.playerWin() === gameModel.players[0]) {
    scoreObj.val = 1;
  }else{
  	return 0;
  }
}// returns a score value for the current board status(3 ai win, 2 draw, 1 ai loss, 0 score undetermined)

function gameBoardList(Model){
	var gameBoardList = {
	key: JSON.stringify(Model),
	val: {
		parentModel:[],
		isAiTurn: true,
		point: score(Model);
		//get the value of the currentModel in terms of (0,1,2, or 3) 				
		};
	};
	return gameBoardList;
}//takes in the the games model and returns an object containing a key and a value 

function mapper(gameBoardList) {
  // currentGameBoard consists of a list of objects in the form {key: fileName, value: line}
  return gameBoardList.map(function(gameBoard){

  	var currentBoard = JSON.parse(gameBoardList.key);
  	Model.prototype.copyBoard.call(); 	
  	// var currentBoard = gameBoard.key.Model.prototype.copyBoard.call;
  	// var boardString = JSON.parse(currentBoard);
     
    var newBoard = [];

    var line = gameBoard.value;
    words = line.split(" ");
    return words.map(function(word) {
        return {key: word, value: "1"}; // each word contributes 1 to the total
    });
  });
}

///////////////////////////////////////////////////////

function flatten(itemList) {
	return itemList.reduce(function(arr, list) {
		return arr.concat(list);
	});
}

function sort(kVPairList) {
	kVPairList.sort(function(kVPair1, kVPair2) {
		var val = 0;
		if(kVPair1.key < kVPair2.key) {
			val = -1;
		}
		else if(kVPair1.key > kVPair2.key) {
			val = 1;
		}
		return val;
	});
}

function plus(a, b) {
	return a + parseInt(b);
}

////////////////////////////////////////
function reducer(sortedKeyValuePairs) {
	var i = 0;
	var keyValuesList = [];
	while(i < sortedKeyValuePairs.length) {
		var key = sortedKeyValuePairs[i].key;
		var singleKeyValuesList = {key: key, values:[]};
		while(i < sortedKeyValuePairs.length && key === sortedKeyValuePairs[i].key) {
			singleKeyValuesList.values.push(sortedKeyValuePairs[i].value);
			i++;
		}
		keyValuesList.push({key: singleKeyValuesList.key, 
		                    value: singleKeyValuesList.values.reduce(plus, 0)
		                   });
	}
	return keyValuesList;
}


