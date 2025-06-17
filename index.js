import { generateRandomNumber, checkGuessNumber } from './func.js';

const INITIAL_SCORE = 20;

let scoreValue = INITIAL_SCORE;
let highscoreValue = 0;
let secretNumber = generateRandomNumber();

document.addEventListener("DOMContentLoaded", () => {
  const againBtn = document.getElementById("againBtn");
  const guessNumberInput = document.getElementById("guessNumberInput");
  const checkBtn = document.getElementById("checkBtn");
  const message = document.getElementById("message");
  const score = document.querySelector("#score");
  const highscore = document.querySelector("#highscore");
  const secretNumberContainer = document.querySelector("#secretNumberContainer");
  const mainContainer = document.getElementById("main-container");

  checkBtn.addEventListener("click", () => {
    const guess = Number(guessNumberInput.value);

    const result = checkGuessNumber(secretNumber, guess, scoreValue);

    message.textContent = result.message;
    score.textContent = result.score;
    scoreValue = result.score;

    if (result.isCorrect) {
      secretNumberContainer.textContent = secretNumber;
      mainContainer.style.backgroundColor = "green";
      checkBtn.disabled = true;

      if (scoreValue > highscoreValue) {
        highscoreValue = scoreValue;
        highscore.textContent = highscoreValue;
      }
    } else if (result.isGameOver) {
      mainContainer.style.backgroundColor = "red";
      checkBtn.disabled = true;
    }

    guessNumberInput.value = '';
  });

  againBtn.addEventListener("click", () => {
    secretNumber = generateRandomNumber();
    scoreValue = INITIAL_SCORE;
    score.textContent = scoreValue;
    secretNumberContainer.textContent = '?';
    message.textContent = '';
    mainContainer.style.backgroundColor = '';
    guessNumberInput.value = '';
    checkBtn.disabled = false;
  });
});
