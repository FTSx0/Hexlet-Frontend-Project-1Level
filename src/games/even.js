import getRandomNumber from '../random.js';
import launch from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const getData = () => {
  const questionNum = getRandomNumber(0, 50);
  const correctAnswer = isEven(questionNum) ? 'yes' : 'no';
  return [questionNum, correctAnswer];
};

const startGame = () => {
  launch(gameRules, getData);
};

export default startGame;
