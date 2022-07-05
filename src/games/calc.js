import launch from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['-', '+', '*'];
const min = 0;
const max = 50;

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return (x + y);
    case '-':
      return (x - y);
    case '*':
      return (x * y);
    default:
      return null;
  }
};

const getTask = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const operatorIndex = getRandomIndex(operators);
  const operator = operators[operatorIndex];

  const answer = String(calculate(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};

const startGame = () => {
  launch(description, getTask);
};

export default startGame;
