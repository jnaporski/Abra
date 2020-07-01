var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];


var gameTitle = document.getElementById("game-title");
var gameInstructions = document.getElementById("game-instructions");
var pressAnyKey = document.getElementById("press-any-key");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var lettersText = document.getElementById("letters-text");


gameTitle.textContent = "Abra";
gameInstructions.textContent = "Guess the letter to capture Abra!!";
pressAnyKey.textContent = "Press any key to begin.";
winsText.textContent = "Wins: ";
lossesText.textContent = "Losses: ";
guessesText.textContent = "Guesses Left: ";
lettersText.textContent = "Letters Already Guessed: ";


var randomLetter = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];



document.onkeyup = function (event) {

    
    var userGuess = event.key;

    
    var acceptableGuesses = listOfLetters;

    
    if (acceptableGuesses.indexOf(userGuess) > -1) {

        
        if (userGuess === randomLetter) {

            
            wins++;
            guessesLeft = 9;
            lettersGuessed = [];
            randomLetter = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
            console.log("You caught ABRA!!!! New letter: " + randomLetter);
        }

       
        if (!lettersGuessed.includes(userGuess) && !lettersGuessed.includes(" " + userGuess)) {

           
            lettersGuessed.push(" " + userGuess);
            guessesLeft--;
        }

                if (guessesLeft === 0) {
            lossesCount++;
            guessesLeft = 9;
            lettersGuessed = [];
            randomLetter = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
            console.log("You lost. New letter: " + randomLetter);
        }

    }

     winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses Left: " + guessesLeft;
    lettersText.textContent = "Letters Already Guessed: " + lettersGuessed;

}