import readlineSync from 'readline-sync';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomNumber = () => Math.round(Math.random() * 100);
const questionCounter = 3;

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  let name = readlineSync.question('May I have your name? ');

  if (name === '') {
    name = 'Anonymous';
  }

  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 1; i <= questionCounter; i += 1) {
    const questionNum = getRandomNumber();
    console.log(`Question: ${questionNum}`);
    const answer = readlineSync.question('Your answer: ');

    const isEvenCheck = questionNum % 2 === 0 ? 'yes' : 'no';
    const checkYes = (answer === 'yes' && isEvenCheck === 'yes');
    const checkNo = (answer === 'no' && isEvenCheck === 'no');
    if (checkYes || checkNo) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEvenCheck}'.\nLet's try again, ${name}!`);
    }
  } return console.log(`Congratulations, ${name}!`);
};

export default isEven;
