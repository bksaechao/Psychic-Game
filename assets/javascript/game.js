//variables
let win = 0;
let loss = 0;
let guessesLeft = 9;
let currentGuesses = [];

//alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// reset function
function reset() {
    guessesLeft = 9;
    currentGuesses = [];
    gl.innerHTML = guessesLeft;
    cg.innerHTML = currentGuesses;
    pickLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(pickLetter)
}
//Computer picks random letter
var pickLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(pickLetter);
//Grabbing elements
document.getElementById("w").innerHTML = win;
document.getElementById("l").innerHTML = loss;
document.getElementById("gl").innerHTML = guessesLeft;
document.getElementById("cg").innerHTML = currentGuesses;
document.onkeyup = function (event) {
    //User Guess
    var userGuess = event.key;
    //Checks to see if userGuess is a value in alphabet
    var checkAlphabet = alphabet.includes(userGuess);
    //Push userGuess onto current guesses
    var checkGuess = currentGuesses.includes(userGuess);
    //if statements to compare guesses
    if (checkAlphabet === false) {
        alert("Not a valid input! Try again!")
        console.log(userGuess);
    } else {
        currentGuesses.push(userGuess);
        cg.innerHTML = currentGuesses;
    }


    if (checkGuess === true) {
        alert("You already picked that one! Try again!")
        currentGuesses.pop();
    } else if (checkAlphabet === false) {
    }
    else {
        guessesLeft--;
        gl.innerHTML = guessesLeft;
    }

    if (userGuess === pickLetter) {
        alert("Wow! You got it! Woot!")
        win++;
        w.innerHTML = win;
        reset();
    } else if (guessesLeft <= 0) {
        loss++;
        l.innerHTML = loss;
        reset();
    }
}