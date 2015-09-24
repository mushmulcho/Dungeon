$("#newPl").click(function(){
	removeAllDiv();
	//creating input field for new player
	$("#newPl2").append("<h2>Creating New Character</h2>"+
		"<input placeholder='Player Name' id='newPlayerName'></input>"+
		"<input placeholder='Character Name' id='characterName'></input>"+
		"<input placeholder='Experiance' id='experiance'></input>"+
		"<input placeholder='Gold' id='gold'></input>");
	$("#newPl2").append("<button class='btn btn-success' id='newPlayer'>New Character</button>");

	//input field for deleting player
	$("#newPl2").append("<br><input placeholder='Delete Character' id='deletePlayer'></input><button class='btn btn-danger' id='delete'>Delete Character</button>");
	deletePlayer();
	newPlayer();
})

	//delete player
function deletePlayer(){

	$("#delete").click(function(){
		var character = $("#deletePlayer").val();
		localStorage.removeItem(character);
		for (var i = 0; i < playerNames.length; i++) {
			if(playerNames[i] == character){
				playerNames.splice(i,1);
				localStorage.setItem("playerName", JSON.stringify(playerNames));
				$("#deletePlayer").val("")
				break;
			}
		};
	});
}
//save players to local storage
function newPlayer(){
	$("#newPlayer").click(function(){
		var name = $("#newPlayerName").val();
		var character = $("#characterName").val();
		var exp = $("#experiance").val();
		var gold = $("#gold").val();
		console.log(name+gold+exp);
		if((name && exp && gold && character) != ""){
			alert("You just made :"+ character+"");
			var thisPlayer = [];
			thisPlayer.push(name,character,gold,exp);
			playerNames.push(character);
			localStorage.setItem("playerName", JSON.stringify(playerNames));
			localStorage.setItem(character , thisPlayer);
			$("#newPlayerName , #experiance , #gold, #characterName").val("");
			console.log(thisPlayer);
		}
	});
}
