import { getRandomNumber } from '../utils.js';
import launch from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 0;
const max = 50;

const isEven = (number) => number % 2 === 0;
const getTask = () => {
  const question = getRandomNumber(min, max);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  launch(gameRules, getTask);
};

export default startGame;
