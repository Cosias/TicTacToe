function score(board) {
	
  if (board.isDraw()) {
   return 2; 
  } 
  else if (board.playerWin() === board.players[1]) {
    return  3;
  } 
  else if (board.playerWin() === board.players[0]) {
    return 1;
  }else{
  	return 0;
  }
}// returns a score value for the current board status(3 ai win, 2 draw, 1 ai loss, 0 score undetermined)


// var gameBoardList = {
// 	key: JSON.stringify(newestModel.board),
// 	val: {
// 		parentModel:[],
// 		isAiTurn: true,
// 		point: score(newestModel)
// 		//get the value of the currentModel in terms of (0,1,2, or 3) 				
// 	}
// };

function gameBoardList(Model){
	var gameBoardList = {
	key: JSON.stringify(Model),
	val: {
		parentModel:[],
		isAiTurn: true,
		point: score(Model)
		//get the value of the currentModel in terms of (0,1,2, or 3) 				
		}
	};
	return gameBoardList;
}//takes in the the games model and returns an object containing a key and a value 


var list = [gameBoardList(newestModel)];


function mapper1(gameBoardList) {
  return gameBoardList.map(function(gameBoard){
  	// console.log(gameBoard.key);
  	// console.log('\n');
  	var currentBoard = JSON.parse(gameBoard.key);
  	
  	var childBoard = [];
	
	

	for(var r =0; r< 3; r++){
		for(var c=0; c <3; c++){
			var mod = Model.prototype.copyModel.call(currentBoard);
			// var player = gameBoardList[0].val.isAiTurn;
			// if(player){
			// 	player = newestModel.players[1];
			// }
			// else if(!player){
			// 	player = newestModel.players[0];
			// }
			if(mod.isValidMove(r,c)){
				mod.makeMove(r,c,'X');
				childBoard.push({
				
					key: JSON.stringify(mod),
					val: {
					parentModel:currentBoard,
					isAiTurn:!gameBoard.val.isAiTurn
				}
				});
			}
		}
	}return childBoard;
});
	
}

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

function reducer1(sortedKeyValuePairs) {
	var i = 0;
	var keyValuesList = [];
	while(i < sortedKeyValuePairs.length) {
		var key = sortedKeyValuePairs[i].key;
		var singleKeyValuesList = {key: key, values:[]};
		while(i < sortedKeyValuePairs.length && key === sortedKeyValuePairs[i].key) {
			// console.log(sortedKeyValuePairs[i].val);
			singleKeyValuesList.values.push(sortedKeyValuePairs[i].val);
			i++;
		}
		keyValuesList.push( singleKeyValuesList);
	}
	
	return keyValuesList;
/*	
	var singleKeyValuesList = {key: sortedKeyValuePairs[0].key, value:sortedKeyValuePairs[0].key};
	sortedKeyValuePairs.forEach(function(kVPair) {
		if(singleKeyValuesList.key != kVPair)
		singleKeyValuePairs.push()
	});
*/
}

function mapper2(gameBoardList){
	return gameBoardList.map(function(){
		
	});
	
}//takes in the output from reducer1 
