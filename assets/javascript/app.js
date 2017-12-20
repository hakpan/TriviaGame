//alert("Testing Link");

$(document).ready(function() {

//These are global variables
var timerStart = 30;
var intervalId;
var lcount = 0;
var wcount = 0;
var unanswered = 0;

//Start the coundown
function run() {
    intervalId = setInterval(decrement, 1000);
}

//Hide the questions and other contents
$(window).on("load", hide);

$('#startGame').on('click', function(){
    $(this).hide();
    $('#instructions').hide();
    $('#playAgain').hide();
    show();
    run();
});

$('#done').on('click', function(){
    $(this).hide();
    hide();
    rSummary();
    stop();
});

//$('#playAgain').on('click', function(){
   //startGame();
//});

//var startGame = function () {

	//Show questions
	//$('.form-group').show();
	//reset timer
    //$('#time').show();
    //show done button
    //$('#done').show();
    //hide playagain button
    //$('#playAgain').hide();
    //hide summary
    //$(rSummary).hide();

//}

//Summary of results function ---------------------------
function rSummary()	{
    var alldone = 		$('<h2>').html('Done!');
    var canswers = 		$('<p>').html('Correct answers: ' + lcount);
    var wanswers = 		$('<p>').html('Incorrect answers: ' + wcount);
    var noAnswer = 		$('<p>').html('Unanswered: ' + unanswered);
    var newclass= 		$('<div class="col-sm-12 text-center" id="summary">');
    newclass.append(alldone);
    newclass.append(canswers);
    newclass.append(wanswers);
    newclass.append(noAnswer);
    //this line of code shows the rSummary content
    $('.row:nth(2)').append(newclass);
    $('#playAgain').show();
}


//Timer function----------------------------------------
function decrement() {
    //  Decrease timer by one.
    timerStart--;
     
     //  Displays Timer
     $("#timer").html(" " + timerStart + " seconds");
    
    //  Once number hits one...
    if (timerStart === 1) {
        $("#timer").html(" " + timerStart + " second");
    }
      //  Once number hits zero...
    else if (timerStart === 0) {
        //  ...run the stop function.
        $('#startGame').hide();
        hide();
        rSummary();
        stop();
    }
}

//Stops the timer function ------------------------------
function stop() {
    clearInterval(intervalId);
}



//This function hides the form, timer, and done button
//when the results are showing
function hide(){
    $('.form-group').hide();
    $('#playAgain').hide();
    $('#time').hide();
    $('#done').hide();

}

//This function will show the form, timer, and done button
//when the trivia game is started
function show() {
    $('.form-group').show();
    $('#time').show();
    $('#done').show();
}

//Grab all radio buttons and calculate good and incorrect answers when a change occurs
$('input[type=radio]').on("change", function() {
   lcount =  $('input[value=goodanswer]:checked').length;
   wcount = $('input[value=wrong]:checked').length;
   unanswered = 6-(lcount + wcount);
});


});
