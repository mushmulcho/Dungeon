// table for player gold and experiance after encounter
function encounterGoods(){
	var encounter = $("<div></div>").attr("id","encounter").append("<input placeholder='Gold' id='encounterGold' type='number'><input placeholder='Experiance' id='encounterExp' type='number'><button class='btn btn-default navbar-btn'>End of Session</button>");
	$("#exp2").append(encounter);
//save all players info in loacal storage
	$("button").click(function(){
	for (var i = 0; i < playerNames.length; i++) {
		var playerClass = $("."+playerNames[i]+"");
		var thisPlayer = [];
		for (var j = 0; j < playerClass.length; j++) {
			var attr = $("."+playerNames[i]+"").eq(j).text();
			thisPlayer.push(attr);
		};
			
		localStorage.setItem(playerNames[i] , thisPlayer);
			console.log(thisPlayer)
		}
	});
//save New players gold and experiance after encounter
	$("#encounterGold, #encounterExp").change(function(){

		for (var i = 0; i < playerNames.length; i++) {
			var playerClass = playerNames[i];
			var oldValue = parseInt($(this).val());
			var id = $(this).attr("id");
			if($("."+playerClass+":eq(4)").text() == "false") count =2;
			else count = 1;
			if(id == "encounterGold"){
				var currentValue = parseInt($("."+playerClass+":eq(2)").text());
				currentValue =currentValue + (oldValue/count);
				$("."+playerClass+":eq(2)").text(currentValue);
			}
			else{
				var currentValue = parseInt($("."+playerClass+":eq(3)").text());
				currentValue =currentValue + (oldValue/count);
				$("."+playerClass+":eq(3)").text(currentValue);
			}
		};
		$(this).val("");
	});
}
