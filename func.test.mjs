import { generateRandomNumber, checkGuessNumber } from './func';

test('should return a number between 1 and 20', () => {
  const number = generateRandomNumber();
  expect(typeof number).toBe('number');
  expect(number).toBeGreaterThanOrEqual(1);
  expect(number).toBeLessThanOrEqual(20);
});



describe('checkGuessNumber', () => {
  const secretNumber = 10;
  const initialScore = 5;

  test('correct guess', () => {
    const result = checkGuessNumber(secretNumber, 10, initialScore);
    expect(result).toEqual({
      message: "Correct Number!",
      score: initialScore,
      isCorrect: true,
      isGameOver: true,
    });
  });

  test('guess too high', () => {
    const result = checkGuessNumber(secretNumber, 15, initialScore);
    expect(result).toEqual({
      message: "Too high!",
      score: initialScore - 1,
      isCorrect: false,
      isGameOver: false,
    });
  });

  test('guess too low', () => {
    const result = checkGuessNumber(secretNumber, 5, initialScore);
    expect(result).toEqual({
      message: "Too low!",
      score: initialScore - 1,
      isCorrect: false,
      isGameOver: false,
    });
  });

  test('game over when score reaches 0', () => {
    const result = checkGuessNumber(secretNumber, 15, 1);
    expect(result).toEqual({
      message: "You lost the game!",
      score: 0,
      isCorrect: false,
      isGameOver: true,
    });
  });

  test('game over when score goes below 0', () => {
    const result = checkGuessNumber(secretNumber, 15, 0);
    expect(result).toEqual({
      message: "You lost the game!",
      score: -1,
      isCorrect: false,
      isGameOver: true,
    });
  });
});