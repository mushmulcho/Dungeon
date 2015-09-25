$("#reputation").click(function(){
    removeAllDiv();
    //table name
    $("#reputation2").html("<h2>Players Reputation</h2>");
    //table
    saveFaction();
    $("#reputation2").append("<table id='rep'></table>");
    createPlayersReputationTable(); 
});

function createPlayersReputationTable(){
    var length = playerNames.length+1;

    for (var i = 0; i < faction.length; i++) {
        var $tr = $("<tr></tr>");
        $("#rep").append($tr.addClass(faction[i]));

        for (var j = 0; j < length; j++) {      
            
            if(j === 0 && i <3){
                $("tr").eq(i).append("<td>"+faction[i]+"</td>");
            }
            else if(j === 0 ){
                    $("tr").eq(i).append("<td onclick='factions(this)' style='background-color:#009900'>"+faction[i]+"</td>");
            }
            else {
                var character = localStorage.getItem(playerNames[j-1]).split(',');
                var className = character[1];
                if(i<2){
                    var space = character[i];
                }
                if(i==2){
                     var space = character[i+2];
                }              
                if(space == undefined){space = "";}
                var $td = $("<td>"+space+"</td>"); 
                if(i > 2){
                    var space = character[i+8];
                    if(space == undefined){space = "";}
                    $td = $("<td>"+space+"</td>");
                }                   
                $("tr").eq(i).append($td.addClass(className));
            }   
        }
    };
}
function factions(rep){
    var Name = $(rep).text();
    bootbox.prompt({
      title: "Expenses",
      value: "",
      callback: function(result) {
        if (result === null) {
          return;
        } else {
            for (var i = 1; i < $("."+Name+"").children().length; i++) {
                var characterName = $("."+Name+"").children().eq(i).attr("class")
                var characterStats = localStorage.getItem(characterName).split(',');
                var present = characterStats[4];
                if (present == "true"){
                    $("."+Name+"").children().eq(i).text(result);
                }
                
            };
        }
      }
    });
}

function saveFaction(){
    $("#reputation2").append("<button id ='end' class='btn btn-default navbar-btn'>Save Characters</button>");
//save all players info in loacal storage
    $("#end").click(function(){
    for (var i = 0; i < playerNames.length; i++) {
        var playerClass = $("."+playerNames[i]+"");
        var thisPlayer = localStorage.getItem(playerNames[i]).split(',');
        for (var j = 3; j < playerClass.length; j++) {
            var attr = playerClass.eq(j).text();
            if(thisPlayer.length == 34){
                thisPlayer[j+8] = attr;
            }
            else{
                thisPlayer.push(attr);
            }
        };         
        localStorage.setItem(playerNames[i] , thisPlayer);
        }
    });
}
