import readlineSync from 'readline-sync';

const questionCount = 3;

const launch = (gameRules, getTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 1; i <= questionCount; i += 1) {
    const [questionNum, correctAnswer] = getTask();
    console.log(`Question: ${questionNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrect = (userAnswer !== correctAnswer);
    if (isCorrect) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default launch;
