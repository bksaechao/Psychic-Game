//variables
let win = 0;
let loss = 0;
let guessesLeft = 9;
let currentGuesses = [];

//alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Grabbing elements
document.getElementById("w").innerHTML = win;
document.getElementById("l").innerHTML = loss;
document.getElementById("gl").innerHTML = guessesLeft;
document.getElementById("cg").innerHTML = currentGuesses;
//Computer picks a random letter
//testing global variable
var pickLetter = alphabet[Math.floor(Match.random() * alphabet.length)];

document.onkeyup = function (event) {
    //-1 guess
    guessesLeft--;
    gl.innerHTML = guessesLeft;
    //User Guess
    var userGuess = event.key;
}
