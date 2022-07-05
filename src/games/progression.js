import launch from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';

const minStep = 1;
const maxStep = 7;

const minLength = 4;
const maxLength = 10;

const min = 1;
const max = 50;

const createProgression = (firstNum, length, stepNum) => {
  const result = [];
  for (let i = 0; i <= length; i += 1) {
    result.push(firstNum + stepNum * i);
  }
  return result;
};

const getTask = () => {
  const length = getRandomNumber(minLength, maxLength);
  const firstNumber = getRandomNumber(min, max);
  const step = getRandomNumber(minStep, maxStep);
  const progression = createProgression(firstNumber, length, step);
  const hidenItem = getRandomIndex(progression);

  const answer = String(progression[hidenItem]);
  progression[hidenItem] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startGame = () => {
  launch(description, getTask);
};

export default startGame;
