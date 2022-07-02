import launch from '../index.js';
import getRandomNumber from '../random.js';

const gameRules = 'What number is missing in the progression?';

const progression = (firstNum, progressionLength, stepNum) => {
  const result = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    result.push(firstNum + stepNum * i);
  }
  return result;
};

const getData = () => {
  const progressionLength = getRandomNumber(4, 10);
  const firstNum = getRandomNumber(1, 50);
  const stepNum = getRandomNumber(1, 7);
  const progressionArr = progression(firstNum, progressionLength, stepNum);
  const hidenItem = getRandomNumber(0, progressionArr.length - 1);
  const correctAnswer = String(progressionArr[hidenItem]);

  progressionArr[hidenItem] = '..';

  const questionNum = progressionArr.join(' ');

  return [questionNum, correctAnswer];
};

const startGame = () => {
  launch(gameRules, getData);
};

export default startGame;
