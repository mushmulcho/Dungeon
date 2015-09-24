$("#calendar").click(function(){
	removeAllDiv();
	//creating calendar 
	$("#calendar2").html("<h1>Year"+year+"</h1>");

	createCalendar();
	attachInputField();
})

function createCalendar(){
		//months
		count=-1;
	for (var i = 0; i < 12; i++) {

		var mesec = "<div class='calendar'><table id=mesec"+[i+1]+"><caption>"+month[i]+"</caption></table></div>";
		$("#calendar2").append(mesec);
	//days
		for (var j = 0; j < 28; j++) {

			if(j%6 == 0){$("#mesec"+[i+1]+"").append("<tr></tr>");count++;}
			$("tr").eq(count).append("<td>"+[j+1]+"</td>");

		}
	};
	//check for events day - attach them 
	for (var i = 0; i < partys.length; i++) {
		if(partys[i] != null ){
			$("td").eq(i).css({"background-color":"red"}).attr("title",""+partys[i]+"");
		}
	};
}
function attachInputField(){
	//create input Field
	$("td").click(function(){
		var day = $("td").index(this);
		
		bootbox.prompt({
		  title: "Create Event",
		  value: ""+partys[day]+"",
		  callback: function(result) {
		    if (result === null) {
		      return;
		    } else {
		      partys[day] = result;
		      localStorage.setItem("party", JSON.stringify(partys));
		    }
		  }
		});

	});
}
