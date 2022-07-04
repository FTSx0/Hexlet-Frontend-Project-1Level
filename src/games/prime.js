import launch from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 50;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const checkLimit = Math.sqrt(number);
  for (let i = 2; i <= checkLimit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getTask = () => {
  const question = getRandomNumber(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  launch(gameRules, getTask);
};

export default startGame;
