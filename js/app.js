//"use strict";

$(document).ready(function(){

	  	//this randomNumber if what the user has to guess
  	var randomNumber = Math.floor((Math.random()*100)+1)
  	console.log(randomNumber);
  	var guessesList = [];
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	/*---New Game---*/
$(".new").on("click", function(){
	randomNumber = Math.floor((Math.random()*100)+1);
	console.log(randomNumber);
	guessesList = [];
});
	/*---Capture Guess---*/
$("#guessButton").on("click", function(event){
	event.preventDefault();
	var userGuess = +($("#userGuess").val());
	console.log(userGuess);
	$("#userGuess").val('');
	verifyValue(userGuess);
});
function verifyValue(value) {
	console.log('verify value');
	console.log(value);
	//value = userGuess;
	if (isNaN(value)) {
		alert("Please enter Number");
	}
	else if (guessesList.indexOf(value) != -1){
		alert("Guess already made!")
	}
	else if (value < 1 || value > 100){
		alert("Please enter a number betweem 1 and 100")
	}
	else{
		checkValue(value);
		guessesList.push(value);
	}
}
	/*---Check Guess---*/
function checkValue(userGuess){
	console.log(randomNumber);
	console.log(userGuess);
var numberDistance = Math.abs(userGuess - randomNumber);
	console.log(numberDistance);
if(userGuess==randomNumber) {
	$("#feedback").text("You won!");
}
else if ( numberDistance<10 ) {
	$("#feedback").text("HOT");
}
else {
	$("#feedback").text("COLD");
}
}

});