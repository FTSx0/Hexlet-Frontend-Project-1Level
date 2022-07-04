import launch from '../index.js';
import { getRandomNumber, getRandomID } from '../utils.js';

const gameRules = 'What is the result of the expression?';

const min = 0;
const max = 50;

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return (a + b);
    case '-':
      return (a - b);
    case '*':
      return (a * b);
    default:
      return null;
  }
};

const getTask = () => {
  const operators = ['-', '+', '*'];
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const operatorID = getRandomID(operators);
  const operator = operators[operatorID];

  const answer = String(calculate(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};

const startGame = () => {
  launch(gameRules, getTask);
};

export default startGame;
