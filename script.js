// ______TO_DO________________________________________________
// - kan bara gissa bokstäver
// - input guess phone
// ___________________________________________________________

//generate random word from array
let wordArr = [
	"vulcano",
	"bitch",
	"jazz",
	"joke",
	"staff",
	"puzzle",
	"school",
	"bug",
];
let word = wordArr[Math.floor(Math.random() * wordArr.length)].toUpperCase();

//render lines for each letter
let linelistEl = document.querySelector("#lines");
for (let i = 0; i < word.length; i++) {
	let lineEl = document.createElement("li");
	lineEl.classList.add("line");
	lineEl.innerHTML = ``;
	linelistEl.append(lineEl);
}

//hangman parts display hidden
let hangmanEl = document.querySelectorAll(`.hidden`);
let hiddenIndex = 0;

//store guesses
let correctGuess = [];
let incorrectGuess = [];
let incorrectGuessListEl = document.querySelector(".incorrect-guess");

//checks if all the letters are guessed
function checkWin(w, a) {
	checkCount = 0;
	for (let i = 0; i < w.length; i++) {
		if (a.includes(w[i])) {
			checkCount += 1;
		}
	}
	if (checkCount === w.length) {
		return true;
	} else {
		return false;
	}
}

// function that displays win/lost
function renderWinOrLoose(string){
	let endStatementEl = document.querySelector("#end-statement");
	let endStatementText = document.querySelector("#end-statement__text");
	endStatementEl.classList.remove("hidden");
	endStatementText.classList.add("animate__animated", "animate__flash");
	return endStatementText.innerHTML = string;
}


//gameplay
document.addEventListener("keypress", function (e) {
	let guess = e.key.toUpperCase();

	//ALREADY GUESSED
	if (incorrectGuess.includes(guess) || correctGuess.includes(guess)) {
		//do nothing for now

	//CORRECT GUESS
	} else if (word.includes(guess)) {
		//displays letter on the correct lines 
		for (let i = 0; i < word.length; i++) {
			if (guess === word[i]) {
				let addGuess = document.querySelectorAll(".line");
				addGuess[i].innerHTML = guess;
			}
		}
		correctGuess.push(guess);

		//INCORRECT GUESS
	} else if (word.includes(guess) === false) {
		//displays one hangman part at a time
		hangmanEl[hiddenIndex].classList.remove("hidden");
		hiddenIndex += 1;
		//logs incorrect guess in array and displays it
		incorrectGuess.push(guess);
		let incorrectLetter = document.createElement("li");
		incorrectLetter.innerHTML = String(guess);
		incorrectGuessListEl.append(incorrectLetter);
	}


	//win or loose
	if (checkWin(word, correctGuess) === true) {
		renderWinOrLoose(`YOU WON!!`)
	} else if (hiddenIndex === 10) {
		renderWinOrLoose(`YOU LOST!! :(`)
	}
});

//replay button - reloads the page
let replayButn = document.querySelector("#end-statement__butn");
replayButn.addEventListener("click", function () {
	location.reload();
});

// display input window on phone screen
// let mediaQuery = matchMedia('(min-width: 40rem)')
// let input = document.querySelector("#input")
// if (mediaQuery.matches){
// 	input.classList.remove('none')
// }
