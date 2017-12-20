//alert("Testing Link");

$(document).ready(function() {

	//set global variables
	var timer = 		30;
	var winCount = 		0;
	var losesCount = 	0;
	var unansward = 	0;
	var intervalID;

	//Start game
		//Hide questions
		$(window).on("load", hide);
		//onclick start game
		$('#startGame').on('click', function(){
			$('#startGame').hide();
		})

});