function create_grid(){
	var sqn = prompt("Please enter the number of squares:");
	$("#draw-area").width(((16+2)*sqn).toString());
	for(var i=1; i<=(sqn*sqn);i++){
		$("#draw-area").append("<div class='square"+"'></div>")
	}
	$(".square").width("16px");
		$(".square").height("16px");
		$(".square").css("border","1px solid black");

		$(".square").mouseenter(function(){
			$(this).css("background-color", "red");
			$(this).css("transition", "0s");
		});

		$(".square").mouseleave(function(){
			$(this).css("transition", "2s");
			$(this).css("background-color", "gray");
		});

}



$(document).ready(function(){
	
	sqn=16;
	$("#draw-area").width(((16+2)*sqn).toString());
	for(var i=1; i<=(sqn*sqn);i++){
		$("#draw-area").append("<div class='square"+"'></div>")
	}
	$(".square").width("16px");
		$(".square").height("16px");
		$(".square").css("border","1px solid black");

		$(".square").mouseenter(function(){
			$(this).css("background-color", "red");
			$(this).css("transition", "0s");
		});

		$(".square").mouseleave(function(){
			$(this).css("transition", "2s");
			$(this).css("background-color", "gray");
		});

		$("#clear").click(function(){
			$(".square").css("background-color", "white");
		});

		$("#new").click(function(){
			$(".square").css("background-color", "white");
			$(".square").remove();
			create_grid();
		});

});

