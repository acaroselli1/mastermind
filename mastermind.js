
var colors = ["blue", "red", "yellow", "green", "orange", "purple"];
var randomIndex = Math.floor(Math.random() * 6);
console.log(randomIndex);


function establishSecretCode() {
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

function chooseRed() {
	document.getElementById("field").value = "red";
}

function chooseOrange() {
	document.getElementById("field").value = "orange";
}

function chooseYellow() {
	document.getElementById("field").value = "yellow";
}

function choosePurple() {
	document.getElementById("field").value = "purple";
}

function chooseBlue() {
	document.getElementById("field").value = "blue";
}

function chooseGreen() {
	document.getElementById("field").value = "green";
}


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


var wins = 0;




window.onload = setSecretCode;

var secretOne = document.getElementById("1").getAttribute("class");
var secretTwo = document.getElementById("2").getAttribute("class");
var secretThree = document.getElementById("3").getAttribute("class");
var secretFour = document.getElementById("4").getAttribute("class");
var secret = [secretOne, secretTwo, secretThree, secretFour];
var chances = 8;

function setSecretCode() {

	document.getElementById("song").play();


}
var number = 36;
function makeGuess(level) {
	var counter = {
		green: 0,
		red: 0,
		yellow: 0,
		blue: 0,
		purple: 0,
		orange: 0
	}
	for (i = 0; i < secret.length; i++) {
		counter[secret[i]]++;

		console.log(counter)
	}

	document.getElementById(level).setAttribute('disabled', 'disabled');
	document.getElementById(level).style.color = "white";

	console.log("counter", counter);
	console.log("secret", secret);
	var guessOne = [];
	var count = 0
	for (var i = number; count < 4; i--) {
		var id = `${number}`
		console.log("id", id)
		var guess = document.getElementById(id).getAttribute("class")
		guessOne.push(guess);
		number--
		count++
		
	}
	// var twoGuess = document.getElementById("34").getAttribute("class");
	// var threeGuess = document.getElementById("35").getAttribute("class");
	// var fourGuess = document.getElementById(number).getAttribute("class");

	console.log(guessOne);


	var answer = [];


	for (var i = 0; i < 4; i++) {
		if (secret[i] == guessOne[i] && answer[i] != "black") {
			answer[i] = "black";
			console.log(guessOne[i]);
			counter[guessOne[i]]--;
		}
	}
	for (var i = 0; i < 4; i++) {
		if ((secret.indexOf(guessOne[i]) != -1) && counter[guessOne[i]] > 0 && answer[i] != "black") {
			answer[i] = "grey";




		} if (secret.indexOf(guessOne[i]) == -1) {
			answer[i] = "white";

		}




	}
	for (var i = 0; i < 4; i++) {

		document.getElementById(level + i).setAttribute("class", answer[i]);
	}


	var chances = 8;

	function declareMissionStatus() {

		for (var i = 0; i < 4; i++) {
			if (answer[i] != "black") {
				return document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + (chances - 1) + " MORE CHANCES TO BREAK THE CODE!!";
			}

		} return document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
		document.getElementById("secretCodeDisplay").removeAttribute("class");
		document.getElementById("song").stop();
		document.getElementById("siren").play();
		wins++;
	}

	declareMissionStatus()
}

function makeGuess2() {

	document.getElementById("makeGuess2").setAttribute('disabled', 'disabled');
	document.getElementById("makeGuess2").style.color = "white";


	console.log(counter);
	console.log(guessOne);

	var oneGuess = document.getElementById("29").getAttribute("class");
	var twoGuess = document.getElementById("30").getAttribute("class");
	var threeGuess = document.getElementById("31").getAttribute("class");
	var fourGuess = document.getElementById("32").getAttribute("class");
	var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


	// var answer = [];


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

	var chances = 7;

	function declareMissionStatus() {

		for (var i = 0; i < 4; i++) {
			if (answer[i] != "black") {
				return document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + (chances - 1) + " MORE CHANCES TO BREAK THE CODE!!";
			}

		} return document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
		document.getElementById("secretCodeDisplay").removeAttribute("class");
		document.getElementById("song").stop();
		document.getElementById("siren").play();
		wins++;
	}

	declareMissionStatus()



}
function makeGuess3() {

	document.getElementById("makeGuess3").setAttribute('disabled', 'disabled');
	document.getElementById("makeGuess3").style.color = "white";


	console.log(counter);
	var oneGuess = document.getElementById("25").getAttribute("class");
	var twoGuess = document.getElementById("26").getAttribute("class");
	var threeGuess = document.getElementById("27").getAttribute("class");
	var fourGuess = document.getElementById("28").getAttribute("class");
	var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


	// var answer = [];


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
	var chances = 6;

	function declareMissionStatus() {

		for (var i = 0; i < 4; i++) {
			if (answer[i] != "black") {
				return document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + (chances - 1) + " MORE CHANCES TO BREAK THE CODE!!";
			}

		} return document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
		document.getElementById("secretCodeDisplay").removeAttribute("class");
		document.getElementById("siren").play();
		wins++;
	}

	declareMissionStatus()
}


function makeGuess4() {

	document.getElementById("makeGuess4").setAttribute('disabled', 'disabled');
	document.getElementById("makeGuess4").style.color = "white";


	console.log(counter);
	var oneGuess = document.getElementById("21").getAttribute("class");
	var twoGuess = document.getElementById("22").getAttribute("class");
	var threeGuess = document.getElementById("23").getAttribute("class");
	var fourGuess = document.getElementById("24").getAttribute("class");
	var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


	// var answer = [];


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

			document.getElementById('D' + i).setAttribute("class", answer[i]);
		}
	}
	var chances = 5;

	function declareMissionStatus() {

		for (var i = 0; i < 4; i++) {
			if (answer[i] != "black") {
				return document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + (chances - 1) + " MORE CHANCES TO BREAK THE CODE!!";
			}

		} return document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
		document.getElementById("secretCodeDisplay").removeAttribute("class");
		document.getElementById("song").stop();
		document.getElementById("siren").play();
		wins++;
	}

	declareMissionStatus()
}

function makeGuess5() {

	document.getElementById("makeGuess5").setAttribute('disabled', 'disabled');
	document.getElementById("makeGuess5").style.color = "white";


	console.log(counter);
	var oneGuess = document.getElementById("17").getAttribute("class");
	var twoGuess = document.getElementById("18").getAttribute("class");
	var threeGuess = document.getElementById("19").getAttribute("class");
	var fourGuess = document.getElementById("20").getAttribute("class");
	var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


	// var answer = [];


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

			document.getElementById('E' + i).setAttribute("class", answer[i]);
		}
	}
	var chances = 4;

	function declareMissionStatus() {

		for (var i = 0; i < 4; i++) {
			if (answer[i] != "black") {
				return document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + (chances - 1) + " MORE CHANCES TO BREAK THE CODE!!";
			}

		} return document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
		document.getElementById("secretCodeDisplay").removeAttribute("class");
		document.getElementById("song").stop();
		document.getElementById("siren").play();
		wins++;
	}

	declareMissionStatus()
}

function makeGuess6() {

	document.getElementById("makeGuess6").setAttribute('disabled', 'disabled');
	document.getElementById("makeGuess6").style.color = "white";


	console.log(counter);
	var oneGuess = document.getElementById("13").getAttribute("class");
	var twoGuess = document.getElementById("14").getAttribute("class");
	var threeGuess = document.getElementById("15").getAttribute("class");
	var fourGuess = document.getElementById("16").getAttribute("class");
	var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


	// var answer = [];


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

			document.getElementById('F' + i).setAttribute("class", answer[i]);
		}
	}
	var chances = 3;

	function declareMissionStatus() {

		for (var i = 0; i < 4; i++) {
			if (answer[i] != "black") {
				return document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + (chances - 1) + " MORE CHANCES TO BREAK THE CODE!!";
			}

		} return document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
		document.getElementById("secretCodeDisplay").removeAttribute("class");
		document.getElementById("song").stop();
		document.getElementById("siren").play();
		wins++;
	}

	declareMissionStatus()
}

function makeGuess7() {

	document.getElementById("makeGuess7").setAttribute('disabled', 'disabled');
	document.getElementById("makeGuess7").style.color = "white";


	console.log(counter);
	var oneGuess = document.getElementById("9").getAttribute("class");
	var twoGuess = document.getElementById("10").getAttribute("class");
	var threeGuess = document.getElementById("11").getAttribute("class");
	var fourGuess = document.getElementById("12").getAttribute("class");
	var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


	// var answer = [];


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

			document.getElementById('G' + i).setAttribute("class", answer[i]);
		}
	}
	var chances = 2;

	function declareMissionStatus() {

		for (var i = 0; i < 4; i++) {
			if (answer[i] != "black") {
				return document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + (chances - 1) + " MORE CHANCES TO BREAK THE CODE!!";
			}

		} return document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
		document.getElementById("secretCodeDisplay").removeAttribute("class");
		document.getElementById("song").stop();
		document.getElementById("siren").play();
		wins++;
	}

	declareMissionStatus()
}

function makeGuess8() {
	document.getElementById("secretCodeDisplay").removeAttribute("class");
	document.getElementById("makeGuess8").setAttribute('disabled', 'disabled');
	document.getElementById("makeGuess8").style.color = "white";


	console.log(counter);
	var oneGuess = document.getElementById("5").getAttribute("class");
	var twoGuess = document.getElementById("6").getAttribute("class");
	var threeGuess = document.getElementById("7").getAttribute("class");
	var fourGuess = document.getElementById("8").getAttribute("class");
	var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


	// var answer = [];


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

			document.getElementById('H' + i).setAttribute("class", answer[i]);
		}
	}
	var chances = 1;

	function declareMissionStatus() {

		for (var i = 0; i < 4; i++) {
			if (answer[i] != "black") {
				return document.getElementById("declareWinner").innerHTML = "OH NO, YOU GOT LOCKED OUT!! GAME OVER!!";
				// document.getElementById("secretCodeDisplay").removeAttribute("class");
			}

		} return document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
		// document.getElementById("secretCodeDisplay").removeAttribute("class");
		document.getElementById("song").stop();
		document.getElementById("siren").play();
		wins++;
	}

	declareMissionStatus()
}

