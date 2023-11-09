let word = `bitch`.toUpperCase();

//display lines
let linelist = document.querySelector("#list");
for (let i = 0; i < word.length; i++) {
	let line = document.createElement("li");
	line.classList.add("line");
	line.innerHTML = ``;
	linelist.append(line);
}

//hangman parts display hidden
let hangman = document.querySelectorAll(`.hidden`);
let hiddenIndex = 0;


//store guesses
let correctGuess = [];
let incorrectGuess = [];
let incorrectGuessList = document.querySelector(".incorrect_guess_display");


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

		//incorrect guess
	} else if (word.includes(guess) === false) {
		hangman[hiddenIndex].classList.remove("hidden");
		hiddenIndex += 1;

		//logs incorrect guess in array and displays it
		incorrectGuess.push(guess);
		let incorrectLetter = document.createElement("p");
		incorrectLetter.innerHTML = String(guess);
		incorrectGuessList.append(incorrectLetter);
	}	



	if(checkWin(word, correctGuess) === true){
		console.log('hurray')
	}else if (hiddenIndex === 10){
		console.log('you lost')
	}
});









//loop 
//display lines and remove hangman

    //loop
	//plays game 
	//if gameover or win ->>break 





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
