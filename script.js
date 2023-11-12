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


// // -------------MAYAS-AND-OSKARS----------------------------------------------
// let word = prompt(`player1 picks a word`).toUpperCase();
// alert(`player2 guess a letter, you have 5 lives until you get hung!`)

// let wordArray = word.split(``);
// let lineArray = wordArray.fill(` _ `);
// let life = 5;

// while (true) {
// 	let guess = prompt(`lifes: ${life}    ${lineArray}`).toUpperCase();

// 	if (word.includes(guess) === true) {
// 		for (let i = 0; i < word.length; i++) {
// 			if (guess === word[i]) {
// 				lineArray[i] = guess;
// 			}
// 		}
// 	} else if (word.includes(guess) !== true) {
// 		life -= 1;
// 	}
// 	if( life === 0 ){
// 		alert(`you're a hanged man!!`);
// 		break;
// 	} else if ((lineArray.includes(` _ `)) === false){
// 		alert(`horrraayyy!!!`)
// 		break;
// 	}
// }

// // -------------ESKILS----------------------------------------------
// // Function to display the word with all letters guessed correctly
// function formatWord(word, correctGuesses) {
//     return word
//         .split('')
//         .map(letter => {
//             if (correctGuesses.includes(letter)) {
//                 return letter;
//             } else {
//                 return '_';
//             }
//         })
//         .join(' ');
// }

// // Function that checks if every letter in the word
// // is within the correct guesses array.
// function checkWin(word, correctGuesses) {
//     return word.split('').every(letter => correctGuesses.includes(letter));
// }

// while (true) {
//     // Input tutnred to uppercase to always compare capital letters
//     let word = prompt('Pick a word').toUpperCase();
//     let correctGuesses = [];
//     let incorrectGuesses = [];

//     while (true) {
//         let formattedWord = formatWord(word, correctGuesses);

//         let guess = prompt(`
//             ${formattedWord}
//             \n
//             You have ${5 - incorrectGuesses.length} left. Guess a letter:
//         `).toUpperCase();

//         if (word.includes(guess)) {
//             correctGuesses.push(guess);
//         } else {
//             incorrectGuesses.push(guess);
//         }

//         if (checkWin(word, correctGuesses)) {
//             alert(`You won :D The word is ${word}`);
//             break;
//         } else if (incorrectGuesses.length >= 5) {
//             alert(`You lost :( The word was ${word}`);
//             break;
//         }
//     }

//     let answer = confirm('Play again?');

//     if (answer === false) {
//         break;
//     }
// }
