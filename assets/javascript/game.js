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

document.onkeyup = function (event) {
    //-1 guess
    guessesLeft--;
    gl.innerHTML = guessesLeft;
    //Computer picks random letter
    var pickLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(pickLetter)
    //User Guess
    var userGuess = event.key;
    //displays userGuess on Current guesses
    currentGuesses.push(userGuess);
    cg.innerHTML = currentGuesses;




    //Compare results
};


