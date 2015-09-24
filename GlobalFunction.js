//taking all player names
var playerNames = JSON.parse(localStorage.getItem("playerName")) || [];
var partys = JSON.parse(localStorage.getItem("party")) || new Array(336);
var count=0;
var year = 518; // !TOVA TRQBVA DA SE SMENQ KATO IZTECHE GODINATA
var month = ["Ku'oras","Brethas","Nuelta","Nevadas","Ka'antas","Sparmath","Tamerta","Dirma","Teozdas","Parasath","Zarias","Erkantas"];
var experianceTable = [300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000];
//var playerName = ["Adorio","Abigeil","Rolen","Moira","Raguel","Stoyan","Nikolai","Cuca"];
var profesion = ["Business","Carousing","Crafting","Leveling","Proffesion","Recuperating","Renown","Researching","Rumors","Selling","Training-skill"];
var playerStats = ["NAME","Player","Gold Income","Exp","Present","Life Standard","Expenses","Exp for Next Level","Activity 1","Activity 2","Current Level"];
var faction =["Faction","Phoenix Island","Meroxad","City Guard","Thieves Guild","Religion","Politicians",
				"Traders Guild","Mages Guild","Eklock","Ukaonas","Upagate","Rayvale","Strolis","Zraurith",
				"Yrabeth","Purora","Ireles","Pravark","Eteley","Morora","Vosa","Strenury","Kopsea"];

var json = JSON.stringify(partys);
var blob = new Blob([json], {type: "application/json"});
var url  = URL.createObjectURL(blob);

var a = document.createElement('a');
a.download    = "backup.json";
a.href        = url;
a.textContent = "Download backup event days";

document.getElementById('content').appendChild(a);

//creating navigation bar
$("body").append("<nav><ul></ul></nav><br>");
$("ul").append("<li class='navButtons' id='exp'>Player Gold & EXP</li>");
$("ul").append("<li class='navButtons' id='reputation'>Reputation</li>");
$("ul").append("<li class='navButtons' id='calendar'>Calendar</li>");
$("ul").append("<li class='navButtons' id='cr'>Monster Chalinge</li>");
$("ul").append("<li class='navButtons' id='newPl'>Add/Delete New Player</li>");
console.log($("li").length)
//creating opne/close windows for navigation bar buttons
for(var i =0;i<5;i++){
	var id = $("li").eq(i).attr("id") + 2;
	$("body").append("<div style='display:none' class='divche' id="+id+"></div>");
}
//creating butons to open div-table
$(".navButtons").click(function(){
	$(".divche").fadeOut("fast");
	var id = $(this).attr("id") +2;
	$("#"+id+"").fadeIn("slow");
});
function removeAllDiv(){
	for (var i = 0; i < 5; i++) {
		var id = $("li").eq(i).attr("id") +2;
		$("#"+id+"").text("");
	}
}
