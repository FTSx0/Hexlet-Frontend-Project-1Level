import launch from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const min = 0;
const max = 50;

const gcd = (x, y) => ((y === 0) ? x : gcd(y, x % y));

const getTask = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);

  const answer = String(gcd(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, answer];
};

const startGame = () => {
  launch(description, getTask);
};

export default startGame;
