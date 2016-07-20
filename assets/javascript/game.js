window.onload = function() {
	
// define variables
	var secretWord = ['ojai', 'avocado', 'bear', 'almonds', 'surfing', 'sequoia', 'carlsbad', 'pacific', 'sunshine', 'tacos'];

	var turns = 10;

	var noTurns=10;

	var wins =0;

	var nopes =[];

	var yups=[];

	var correctGuess = 0;

	var currentWord = secretWord[Math.floor(Math.random()*secretWord.length)];

	var dashLength = currentWord.length;

	// to find the curren word:    console.log(currentWord);

// find length of word for dash placement 

	for (i=0;i<dashLength;i+=1) {
	  yups.push("_ ");
	  yups.join(" ");
	  var yupsString = yups.toString();
	  var yupsEdited = yupsString.replace(/,/g," ");
	  var dashLengthShow = document.getElementById("blanks");
	  var dashLengthShowStr = yups;
	  dashLengthShow.innerHTML = dashLengthShowStr;
	  dashLengthShow.innerHTML = yupsEdited;

	}

	var incorrect = document.getElementById("jail");

	var incorrectStr ="<p>" + "wipeouts: " + nopes + "</p>";
	incorrect.innerHTML = incorrectStr;

	var output = document.getElementById("score");

	var outputStr = "<p>" + "turns remaining: " + turns + "</p>" ;
	output.innerHTML = outputStr;



// grabs the users guess 

	document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	

 // find the placement of each letter

 	for (var i = 0; i < dashLength; i++) {
 		var result = currentWord.charAt(i);
 		if (result === userGuess){

			yups.splice(i, 1, userGuess);
			console.log(yups);
			var dashLengthShow = document.getElementById("blanks");
	  		var dashLengthShowStr = yups;
	  		dashLengthShow.innerHTML = yups.join(" ");

 		}
 	}
	
 // determines if the user's guess is part of secret word or not
	
	var checks = currentWord.includes(userGuess);

	if (checks) {
		correctGuess++;
		}

	else if (checks == false) {
		console.log("boooohooo");
		turns --;
		noTurns --;


		nopes.push(userGuess);

		var output = document.getElementById("score");

		var outputStr = "<p>" + "turns remaining: " + turns + "</p>" ;
		output.innerHTML = outputStr;

		var incorrect = document.getElementById("jail");

		var incorrectStr ="<p>" + "wipeouts: " + nopes + "</p>";
		incorrect.innerHTML = incorrectStr;

		}

// at end of game, either win or lose status & play again/

	var a = yups.indexOf("_ ");

	if (a == -1){
			confirm ("Nice job, dude! Play again?")
			wins++;
			console.log(wins);
			if (true) { window.location.reload()}
		}
	else if (noTurns ===0) {
		confirm("aww gnarly bro, you lost! the answer was " + currentWord + "! wannna play again??")
		if (true) { window.location.reload()}
	}
	}

	

}