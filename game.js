window.onload = function() {
	
// define variables
	var secretWord = ['ojai', 'avocado', 'bear', 'almonds', 'surfing', 'sequoia', 'carlsbad', 'pacifc', 'sunshine'];

	var turns = 10;

	var nopes =[];

	var yups=[];

	var currentWord = secretWord[Math.floor(Math.random()*secretWord.length)];

	var dashLength = currentWord.length;

	console.log(currentWord);

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
	  console.log(yups);
	}






// grabs the users guess 

	document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	console.log(userGuess);

 // find the placement of each letter

 	for (var i = 0; i < currentWord.length; i++) {
 		var result = currentWord.charAt(i);
 		if (result === userGuess){
 			console.log(i);

			yups.splice(i, 1, userGuess);
			console.log(yups);
			var dashLengthShow = document.getElementById("blanks");
	  		var dashLengthShowStr = yups;
	  		dashLengthShow.innerHTML = yups.join(" ");

 		}
 	}
	

	if (turns < 1) {
		alert("game over");
	}
	
	
	var checks = currentWord.includes(userGuess);

	if (checks) {
		console.log("that's rad");
		
	}




	else if (checks == false) {
		console.log("boooohooo");
		turns --;

		nopes.push(userGuess);

		var output = document.getElementById("score");

		var outputStr = "<p>" + "turns remaining: " + turns + "</p>" ;
		output.innerHTML = outputStr;

		var incorrect = document.getElementById("jail");

		var incorrectStr ="<p>" + "incorrect guessses: " + nopes + "</p>";
		incorrect.innerHTML = incorrectStr;

		}
	
	}
}
