

var one = document.getElementById("1").setAttribute("class", "blue");
var two = document.getElementById("2").setAttribute("class", "red");
var three = document.getElementById("3").setAttribute("class", "yellow");
var four = document.getElementById("4").setAttribute("class", "green");

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

function setSecretCode() {

	for (i = 0; i < secret.length; i++) {
		counter[secret[i]]++;

		console.log(counter);
	}
}
function makeGuess1() {



	console.log(counter);
	var oneGuess = document.getElementById("33").getAttribute("class");
	var twoGuess = document.getElementById("34").getAttribute("class");
	var threeGuess = document.getElementById("35").getAttribute("class");
	var fourGuess = document.getElementById("36").getAttribute("class");
	var guessOne = [oneGuess, twoGuess, threeGuess, fourGuess]


	var answer = [];


	for (var i = 0; i < 4; i++) {
		if (secret[i] == guessOne[i] && answer[i]!="black") {
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
	
}


for (var i = 0; i < 4; i++) {

	document.getElementById('A' + i).setAttribute("class", answer[i]);
}


}


