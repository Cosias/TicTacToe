var myTable = document.getElementById("dynamicTable");


function createTable(rows,columns)
{
	var myTable = document.getElementById("dynamicTable");

		for (var i = 0; i< rows; i++)
{
	var tableRow = document.createElement('TR');
	myTable.appendChild(tableRow);
	
	for (var j = 0; j<columns; j++)
	{
		var tableCell = document.createElement('TD');	


		// TABLE CELL STYLING LATER UPDATED IN TTT-STYLES.CSS 
		tableCell.style.width = '50px';
		tableCell.style.height = '50px';
		tableCell.style.bgColor= '#DDD';
		tableCell.style.border = '2px solid black';
		tableCell.style.fontFamily = 'verdana, sans-serrif';
		tableCell.style.textAlign = "center";
		//	

		tableCell.className= 'game-grid-cell';
		// tableCell.addEventListener("click",function(){
		// 	alert("you clicked me");
		// 	//setCellText(this, "X");
		// 	//makeMove(0,1,"X");
		// 	});
		
		tableRow.appendChild(tableCell);
		
	}
}	
	myTable.className = 'game-grid-view';
}

createTable(3,3);

// function addEventListeners(myTable)
// {
// 	for(var i = 0; i <= myTable.rows.length; i++){
// 		for(var j = 0; j <= myTable.cells.length; j++){
// 			myTable.rows[i].cells[j].addEventListener("click",function(){
// 				alert("you clicked me");
// 			});
// 		}
// 	}
// }


function setCellText(cell,string) //(row,column,string)
{
	// myTable.rows[row].cells[column].textContent = string;
	cell.textContent = string;
}

setCellText(1,2,"X");
setCellText(0,0,"O");
setCellText(2,1,'X');

// document.getElementById("dynamicTable").addEventListener("click",alert("I've been clicked"));
// function View(model,callback){
// 	callback(tableCell,row,column);
// }

// View controller = new View(model, function(tableCell, row,column){
// 	tableCell.addEventListener("click", setCellText(row,column,string){

// 	});
// });




