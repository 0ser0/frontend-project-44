import run from '../index.js'

// Генератор случайных чисел от 1 до 1000
const getRandomNumber = () => Math.floor(Math.random() * 1000) + 1

// Проверка чётности
const isEvenNumber = (num) => num % 2 === 0

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

// Реализация игры
const runRound = () => {
  const question = getRandomNumber()
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}

// Запуск
const runEven = () => {
  run(description, runRound)
}

export default runEven