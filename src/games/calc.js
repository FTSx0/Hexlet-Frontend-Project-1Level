import launch from '../index.js';
import getRandomNumber from '../random.js';

const gameRules = 'What is the result of the expression?';

const calculator = (num1, num2, operator) => {
  let result = 0;
  if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '+') {
    result = num1 + num2;
  } else result = num1 * num2;
  return result;
};

const getData = () => {
  const operators = ['-', '+', '*'];
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operatorID = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorID];
  const questionNum = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculator(num1, num2, operator));
  return [questionNum, correctAnswer];
};

const startGame = () => {
  launch(gameRules, getData);
};

export default startGame;
