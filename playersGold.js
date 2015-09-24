$("#exp").click(function(){
	removeAllDiv();
	//table name
	$("#exp2").html("<h2>Player Experiance and Gold</h2>");
	//table
	$("#exp2").append("<table id='names'></table>");
	createPlayersTable();
	encounterGoods();	
});
function createPlayersTable(){
	var length = playerNames.length+1;

	for (var i = 0; i < playerStats.length; i++) {
		$("#names").append("<tr></tr>");

		for (var j = 0; j < length; j++) {		
			
			if(j === 0){
				$("tr").eq(i).append("<td>"+playerStats[i]+"</td>");
			}
			else {
				var character = localStorage.getItem(playerNames[j-1]).split(',');
				var space = character[i];
				var className = character[1];
				if(space == undefined){space = "";}
				if(i === 7 || i === 10){
					space = charactetLevel(character,i);
				}
				var $td = $("<td>"+space+"</td>");
				if(i === 8 || i===9){
					$td = $("<td onclick='downTownActivity(this)' style='background-color:#009900'>"+space+"</td>");
				}
				if(i === 5 || i === 6){
					$td = $("<td onclick='lifeStandart(this)' style='background-color:#009900'>"+space+"</td>");
				}
				if(i === 4){
					$td = $("<td onclick='presentForSession(this)' class='present' style='background-color:#009900'>"+space+"</td>");
				}
				$("tr").eq(i).append($td.addClass(className));
			}	
		}
	};
}
function presentForSession(pres){

	var tru = $(pres).text();
	if(tru == "false"){
		$(pres).text("true");
	}
	else{
		$(pres).text("false")
	}

}
function lifeStandart(num){

	var numb = $(num).val();

	bootbox.prompt({
		  title: "Expenses",
		  value: ""+numb+"",
		  callback: function(result) {
		    if (result === null) {
		      return;
		    } else {
		      $(num).text(result);
		     // localStorage.setItem("party", JSON.stringify(partys));
		    }
		  }
		});

}
function charactetLevel(character,a){
	for (var i = 0; i < experianceTable.length; i++) {
		if(a===7 && experianceTable[i] >= character[3]){
			return (experianceTable[i] - character[3] + "-xp Left");
		}
		if(experianceTable[i] >= character[3]){
			return experianceTable.indexOf(experianceTable[i])+1;
		} 
	};
}
function downTownActivity(button){
	bootbox.dialog({
	  message: "Choose Activity",
	  buttons: {
	    Business: {
	      label: "Business",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	        $(button).text("Business");
	      }
	    },
	    Carousing: {
	      label: "Carousing",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	        $(button).text("Carousing");
	      }
	    },
	    Crafting: {
	      label: "Crafting",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	       $(button).text("Crafting");
	      }
	    },
	    Leveling: {
	      label: "Leveling",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	       $(button).text("Leveling");
	      }
	    },
	    Proffesion: {
	      label: "Proffesion",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	       $(button).text("Proffesion");
	      }
	    },
	    Recuperating: {
	      label: "Recuperating",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	       $(button).text("Recuperating");
	      }
	    },
	    Renown: {
	      label: "Renown",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	       $(button).text("Renown");
	      }
	    },
	    Researching: {
	      label: "Researching",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	       $(button).text("Researching");
	      }
	    },
	    Rumors: {
	      label: "Rumors",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	       $(button).text("Rumors");
	      }
	    },
	    Selling: {
	      label: "Selling",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	       $(button).text("Selling");
	      }
	    },
	    Training: {
	      label: "Training(skill)",
	      className: "btn btn-sm btn-success",
	      callback: function() {
	      	$(button).text("Training-skill");
	       
	      }
	    }
	  }
	});
}
