import launch from '../index.js';
import getRandomNumber from '../random.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 > num1) {
    return gcd(num2, num1);
  } if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const getData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const questionNum = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [questionNum, correctAnswer];
};

const startGame = () => {
  launch(gameRules, getData);
};

export default startGame;
