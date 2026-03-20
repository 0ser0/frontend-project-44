import run from '../index.js'

// Генератор случайных чисел от 1 до 100
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const description = 'Find the greatest common divisor of given numbers.'

// Реализация игры
const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const runRound = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()

  const question = `${num1} ${num2}`
  const correctAnswer = String(gcd(num1, num2))

  return { question, correctAnswer }
}

// Запуск
const runGcd = () => {
  run(description, runRound)
}

export default runGcd
