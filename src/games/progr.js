import run from '../index.js'

// Генератор случайных чисел от 1 до 10
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1

// Генератор случайных чисел в определенном интервале
const getRandomInterval = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const description = 'What number is missing in the progression?'

// Арифметическая прогрессия
const generateProgression = (start, step, size) => {
  const progressionResult = []
  for (let i = 0; i < size; i += 1) {
    progressionResult.push(start + i * step)
  }
  return progressionResult
}

// Реализация раунда
const runRound = () => {
  const start = getRandomNumber()
  const step = getRandomNumber()
  const size = getRandomInterval(5, 10)
  const progression = generateProgression(start, step, size)
  const hiddenIndex = getRandomInterval(0, progression.length - 1)

  // Вставка скрытого элемента внутрь нового массива на основе progression
  const newArr = []
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hiddenIndex) {
      newArr.push('..')
    } else {
      newArr.push(progression[i])
    }
  }

  // Объединение элементов в строку
  const question = newArr.join(' ')
  const correctAnswer = String(progression[hiddenIndex])

  return { question, correctAnswer }
}

// Запуск
const runProgr = () => {
  run(description, runRound)
}

export default runProgr