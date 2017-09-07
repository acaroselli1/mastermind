
	var colors =["blue", "red", "yellow", "green", "orange", "purple"];
	var randomIndex = Math.floor(Math.random() * 6);
	console.log (randomIndex);


function establishSecretCode(){
randomIndex = Math.floor(Math.random() * 6);	
var one = document.getElementById("1").setAttribute("class", colors[randomIndex]);
randomIndex = Math.floor(Math.random() * 6);
var two = document.getElementById("2").setAttribute("class", colors[randomIndex]);
randomIndex = Math.floor(Math.random() * 6);
var three = document.getElementById("3").setAttribute("class", colors[randomIndex]);
randomIndex = Math.floor(Math.random() * 6);
var four = document.getElementById("4").setAttribute("class", colors[randomIndex]);
}

establishSecretCode()

var cells = document.getElementsByTagName("td");

for (i = 0; i < cells.length; i++) {

	cells[i].onclick = chooseCellColor;
}


function chooseCellColor(location) {
	var field = document.getElementById("field");
	var square = location.target;

	if (field.value == "red") {
		square.setAttribute("class", "red");
	} else if (field.value == "blue") {
		square.setAttribute("class", "blue");
	} else if (field.value == "orange") {
		square.setAttribute("class", "orange");
	} else if (field.value == "yellow") {
		square.setAttribute("class", "yellow");
	} else if (field.value == "purple") {
		square.setAttribute("class", "purple");
	} else if (field.value == "green") {
		square.setAttribute("class", "green");
	}

}

var counter = {
	green: 0,
	red: 0,
	yellow: 0,
	blue: 0,
	purple: 0,
	orange: 0
}

window.onload = setSecretCode;

var secretOne = document.getElementById("1").getAttribute("class");
var secretTwo = document.getElementById("2").getAttribute("class");
var secretThree = document.getElementById("3").getAttribute("class");
var secretFour = document.getElementById("4").getAttribute("class");
var secret = [secretOne, secretTwo, secretThree, secretFour];
var chances = 8;

function setSecretCode() {

	for (i = 0; i < secret.length; i++) {
		counter[secret[i]]++;

		console.log(counter);
	}
}

function makeGuess1() {
	
	document.getElementById("makeGuess1").setAttribute('disabled', 'disabled');
	document.getElementById("makeGuess1").style.color = "white";


	console.log(counter);

	var oneGuess = document.getElementById("33").getAttribute("class");
	var twoGuess = document.getElementById("34").getAttribute("class");
	var threeGuess = document.getElementById("35").getAttribute("class");
	var fourGuess = document.getElementById("36").getAttribute("class");
	var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


	var answer = [];


	for (var i = 0; i < 4; i++) {
		if (secret[i] == guessOne[i] && answer[i] != "black") {
			answer[i] = "black";
			counter[guessOne[i]]--;
		}
	}
	for (var i = 0; i < 4; i++) {
		if ((secret.indexOf(guessOne[i]) != -1) && counter[guessOne[i]] > 0) {
			answer[i] = "grey";




		} else if (secret.indexOf(guessOne[i]) == -1) {
			answer[i] = "white";

		}




		for (var i = 0; i < 4; i++) {

			document.getElementById('A' + i).setAttribute("class", answer[i]);
		}
	}



 
	var chances =8;
	var wins = 0;
	
	function declareMissionStatus() {

		for (var i = 0; i < 4; i++) {
			if (answer[i] != "black") {
			return document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + (chances - 1)  + " MORE CHANCES TO BREAK THE CODE!!";
			}

		} return document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
		
		wins++;
	}

 declareMissionStatus()
}	

	function makeGuess2() {

		document.getElementById("disease-button").setAttribute('disabled', 'disabled');
		document.getElementById("disease-button").style.color = "white";


		console.log(counter);
		var oneGuess = document.getElementById("29").getAttribute("class");
		var twoGuess = document.getElementById("30").getAttribute("class");
		var threeGuess = document.getElementById("31").getAttribute("class");
		var fourGuess = document.getElementById("32").getAttribute("class");
		var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


		var answer = [];


		for (var i = 0; i < 4; i++) {
			if (secret[i] == guessOne[i] && answer[i] != "black") {
				answer[i] = "black";
				counter[guessOne[i]]--;
			}
		}
		for (var i = 0; i < 4; i++) {
			if ((secret.indexOf(guessOne[i]) != -1) && counter[guessOne[i]] > 0) {
				answer[i] = "grey";




			} else if (secret.indexOf(guessOne[i]) == -1) {
				answer[i] = "white";

			}




			for (var i = 0; i < 4; i++) {

				document.getElementById('B' + i).setAttribute("class", answer[i]);
			}
		}

	}
	function makeGuess3() {



		console.log(counter);
		var oneGuess = document.getElementById("25").getAttribute("class");
		var twoGuess = document.getElementById("26").getAttribute("class");
		var threeGuess = document.getElementById("27").getAttribute("class");
		var fourGuess = document.getElementById("28").getAttribute("class");
		var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


		var answer = [];


		for (var i = 0; i < 4; i++) {
			if (secret[i] == guessOne[i] && answer[i] != "black") {
				answer[i] = "black";
				counter[guessOne[i]]--;
			}
		}
		for (var i = 0; i < 4; i++) {
			if ((secret.indexOf(guessOne[i]) != -1) && counter[guessOne[i]] > 0) {
				answer[i] = "grey";




			} else if (secret.indexOf(guessOne[i]) == -1) {
				answer[i] = "white";

			}




			for (var i = 0; i < 4; i++) {

				document.getElementById('C' + i).setAttribute("class", answer[i]);
			}
		}

	}