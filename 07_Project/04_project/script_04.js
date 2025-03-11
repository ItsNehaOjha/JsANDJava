let randomNumber;
let prevGuess;
let numGuess;
let playGame = true;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.getElementsByClassName('resultParas');

const p = document.createElement('p');

function launchGame() {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${5 - numGuess}`;
    lowOrHi.innerHTML = ''; // Clear any previous messages
}

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1 || guess > 100) { // Fixed the condition
        alert("Please enter a number between 1 and 100");
    } else {
        prevGuess.push(guess);
        numGuess++;
        displayGuess(guess);
        
        if (numGuess === 5) {
            displayMsg(`Game Over! The random number was ${randomNumber}`);
            endGame();
        } else {
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg("You guessed it right!");
        endGame();
    } else if (guess < randomNumber) {
        displayMsg("Number is too low");
    } else {
        displayMsg("Number is too high");
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${5 - numGuess}`;
}

function displayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver[0].appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        launchGame();
        userInput.removeAttribute('disabled');
        startOver[0].removeChild(p); // Fixed the removal
        playGame = true;
    });
}

// Start the first game when the page loads
launchGame();
