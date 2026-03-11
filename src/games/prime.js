import run from '../index.js';

// Генератор случайных чисел от 1 до 100
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

// Проверка на простое число
const isPrimeNumber = (num) => {
    if (num < 2) {
        return false
    }

    else if (num === 2) {
        return true
    }

    else if (num % 2 === 0) {
        return false
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0){
        return false
        }
    }

    return true
}
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

// Реализация игры
const runRound = () => {
    const question = getRandomNumber();
    const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no'
    return {question, correctAnswer}
}

// Запуск
const runPrime= () => {
    run (description, runRound)
}

export default runPrime