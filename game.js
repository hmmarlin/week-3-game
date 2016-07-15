<script>
	

	var secretWord = ['avocado', 'bear', 'yosemite', 'surfing', 'redwood', 'sunshine'];

	var turns = 10;

	var nopes =[];

	var yups=[];

	

	var currentWord = secretWord[Math.floor(Math.random()*secretWord.length)];

	console.log(currentWord);

	

	document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	console.log(userGuess);


	

	if (turns < 1) {
		alert("game over");
	}
	
	
	var checks = currentWord.includes(userGuess);

	if (checks) {
		console.log("that's rad");

		yups.push(userGuess);

		var letters = document.getElementById("stage");

		var lettersStr ="<p>" + "correct guessses: " + yups + "</p>";
		letters.innerHTML = lettersStr;


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



</script>