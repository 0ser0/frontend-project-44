import run from '../index.js'

// Генератор случайного оператора
const getRandomOperator = () => {
  const operator = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operator.length)
  return operator[randomIndex]
}

// Генератор случайных чисел от 1 до 10
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1

const description = 'What is the result of the expression?'

// Реализация игры
const calc = (num1, num2, oper) => {
  if (oper === '+') {
    return num1 + num2
  }
  else if (oper === '-') {
    return num1 - num2
  }
  else if (oper === '*') {
    return num1 * num2
  }
  else {
    return null
  }
}

const runRound = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const oper = getRandomOperator()

  const question = `${num1} ${oper} ${num2}`
  const correctAnswer = String(calc(num1, num2, oper))

  return { question, correctAnswer }
}

// Запуск
const runCalc = () => {
  run(description, runRound)
}

export default runCalc
