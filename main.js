let word = `bitch`.toUpperCase();

//display lines
let list = document.querySelector("#list");
for (let i = 0; i < word.length; i++) {
	let line = document.createElement("li");
	line.classList.add("line");
	line.innerHTML = ``;
	list.append(line);
}

//hangman parts display hidden
let hangman = document.querySelectorAll(`.hidden`);
let hiddenIndex = 0;

//incorrect guess will display the guess at random place
let correctGuess = [];
let incorrectGuess = [];
let body = document.querySelector(".incorrect_guess_display");


//checks if all the letters a guessed
function checkWin(w, a){
	checkCount = 0
	for (let i = 0; i < w.length; i++) {
		if (a.includes(w[i])){
			checkCount +=1
		}
	}
	if(checkCount === w.length){
		return true;
	}else{
		return false;
	}
}


//gameplay
document.addEventListener("keypress", function (e) {
	let guess = e.key.toUpperCase();

	//check guess and logs in array
	if (incorrectGuess.includes(guess) || correctGuess.includes(guess)) {
		//do nothing for now
		//correct guess
	} else if (word.includes(guess)) {
		for (let i = 0; i < word.length; i++) {
			if (guess === word[i]) {
				let addGuess =
					document.querySelectorAll(".line");
				addGuess[i].innerHTML = guess;
			}
		}
		correctGuess.push(guess);
		console.log(correctGuess);
		//incorrect guess
	} else if (word.includes(guess) === false) {
		hangman[hiddenIndex].classList.remove("hidden");
		hiddenIndex += 1;

		//logs incorrect guess in array and displays it
		incorrectGuess.push(guess);
		let incorrectLetter = document.createElement("p");
		incorrectLetter.innerHTML = String(guess);
		body.append(incorrectLetter);
	}	
});

if(checkWin(word, correctGuess) === true){
	console.log('hurray')
}


// let awnser = confirm(`play again?`);
// if (awnser === false) {
// 	break;
// }

// ADDS HANGMAN PART
// let hangman = document.querySelectorAll(`.hidden`);
// let index = 0;
// document.addEventListener("keydown", function (e) {
// 	if ((e.key = ` `)) {
// 		hangman[index].classList.remove('hidden')
// 		index +=1
// 	}
// });

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
