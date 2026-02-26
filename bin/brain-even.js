import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

// Генератор случайных чисел от 1 до 1000
const getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

// Проверка чётности
const isEvenNumber = (num) => num % 2 === 0;

// Реализация игры
const brainEven = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber();
    const correctAnswer = isEvenNumber(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userResult = readlineSync.question('Your answer: ');

    if (userResult !== correctAnswer) {
      console.log(`'${userResult}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

// Запуск
brainEven();