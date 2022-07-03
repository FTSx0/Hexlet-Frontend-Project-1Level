import launch from '../index.js';
import getRandomNumber from '../random.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const questionNum = getRandomNumber(1, 50);
  const correctAnswer = isPrime(questionNum) ? 'yes' : 'no';
  return [questionNum, correctAnswer];
};

const startGame = () => {
  launch(gameRules, getData);
};

export default startGame;
