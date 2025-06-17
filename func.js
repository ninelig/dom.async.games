export function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log('randomNumber', randomNumber);
  return randomNumber;
}

export function checkGuessNumber(secretNumber, guess, currentScore) {
  if (guess == secretNumber) {
    return {
      message: "Correct Number!",
      score: currentScore,
      isCorrect: true,
      isGameOver: true,
    };
  }

  const newScore = currentScore - 1;
  const message = guess > secretNumber ? "Too high!" : "Too low!";
  const isGameOver = newScore <= 0;

  return {
    message: isGameOver ? "You lost the game!" : message,
    score: newScore,
    isCorrect: false,
    isGameOver,
  };
}