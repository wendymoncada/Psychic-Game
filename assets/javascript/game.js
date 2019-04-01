var wins = 0;
var win = "Wins: ";
var losses = 0;
var lose = "Losses: ";
var attemptsLeft = 9;
var attempts = "Guesses left: ";
var guessMade = [];
var guesses = "Your guesses so far: ";
var userGuess = document.onkeyup;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = letters[Math.floor(Math.random() * letters.length)];


document.onkeyup = function (event) {

    console.log(computerChoice);

    var userGuess = event.key;
    guessMade.push(userGuess);

    if (computerChoice == userGuess) {
        wins++;
        attemptsLeft = 9;
        guessMade = [];
        console.log("Wins: " + wins);
        document.getElementById("wins").textContent = win + wins;
    }

    else if (attemptsLeft == 0) {
        losses++;
        attemptsLeft = 9;
        guessMade = [];
        console.log("Guesses left: " + attemptsLeft);
        document.getElementById("losses").textContent = lose + losses;
    }

    else {
        attemptsLeft--;
        console.log("Your guesses so far: " + guessMade);
        document.getElementById("attemptsLeft").textContent = attempts + attemptsLeft;
        document.getElementById("guessMade").textContent = guesses + guessMade;
    }

};