import readlineSync from 'readline-sync';

const questionCounter = 3;

const launch = (gameRules, getData) => {
  console.log('Welcome to the Brain Games!');
  let name = readlineSync.question('May I have your name? ');

  if (name === '') {
    name = 'Anonymous';
  }
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 1; i <= questionCounter; i += 1) {
    const [questionNum, correctAnswer] = getData();
    console.log(`Question: ${questionNum}`);
    const answer = readlineSync.question('Your answer: ');
    const correctCheck = (answer === correctAnswer);
    if (correctCheck) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  } return console.log(`Congratulations, ${name}!`);
};

export default launch;
