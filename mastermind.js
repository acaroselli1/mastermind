
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






var secretOne = document.getElementById("1").getAttribute("class");
var secretTwo = document.getElementById("2").getAttribute("class");
var secretThree = document.getElementById("3").getAttribute("class");
var secretFour = document.getElementById("4").getAttribute("class");
var secret = [secretOne, secretTwo, secretThree, secretFour];




var number = 36;

var chances = 7;
var seconds = 300;

	function time() {

		seconds--;


		document.getElementById("clock").innerHTML = seconds;
	}

	setInterval(time, 1000);

	function makeGuess(level) {

	if (level == 'H') {
		document.getElementById("secretCodeDisplay").removeAttribute("class");
	}

	document.getElementById("song").play();


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




	// if (chances == 0){
	// 	document.getElementById("secretCodeDisplay").removeAttribute("class");
	// }


	function declareMissionStatus() {
		var correctCount = 0
		for (var i = 0; i < 4; i++) {
			if (answer[i] == "black") {
                correctCount++;
			}
			
		} if (correctCount ==4){ 
			document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
		document.getElementById("song").pause();
		document.getElementById("siren").play();
		} else {
		document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + chances + " MORE CHANCES TO BREAK THE CODE!!";
		chances--;
	}
	
		// document.getElementById("secretCodeDisplay").removeAttribute("class");
	
	}
	declareMissionStatus()
}





