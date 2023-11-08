// ________________________MAYAS_BEM___________________________________
let word = `bitch`.toLocaleUpperCase();
let wordArray = word.split(``);

//display lines
let list = document.querySelector("#list");
for (let i = 0; i < word.length; i++) {
	let line = document.createElement("li");
	line.innerHTML = ` `;
	list.append(line);
}

//display lifes
let life = 10;
let lifeDisplay = document.querySelector("#lifes");
lifeDisplay.innerHTML = `lifes = ${life}`;

//function that checks guess

let correctGuess = [];
let incorrectGuess = [];
let guess = document.addEventListener("keypress", function (e) {
	console.log(e.key);
});

// while (true) {
// 	let guess = document.addEventListener("keypress", function (e) {
// 		console.log(e.key);
// 	});

// 	if (word.includes(guess) === true) {
// 		for (let i = 0; i < word.length; i++) {
// 			if (guess === word[i]) {
// 				lineArray[i] = guess;
// 			}
// 		}
// 	} else if (word.includes(guess) !== true) {
// 		life -= 1;
// 	}
// 	if (life === 0) {
// 		alert(`you're a hanged man!!`);
// 		break;
// 	} else if (lineArray.includes(` _ `) === false) {
// 		alert(`horrraayyy!!!`);
// 		break;
// 	}
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
