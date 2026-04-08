#!/usr/bin/env node
import readlineSync from 'readline-sync'

const prime = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const isPrime = (num) => {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false
    }
    return true
  }

  const win = 3
  let process = 0

  while (process < win) {
    const number1 = Math.floor(Math.random() * 100) + 1
    const result = isPrime(number1) ? 'yes' : 'no'

    console.log(`Question: ${number1}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === String(result)) {
      console.log('Correct!')
      process += 1
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

prime()
