import readlineSync from 'readline-sync'
import greetUser from '../src/cli.js'

const roundsCount = 3

const run = (description, runRound) => {
  const name = greetUser()
  console.log(description)

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = runRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default run
