#!/usr/bin/env node

import readlineSync from 'readline-sync'

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))

const gcd = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 1; i <= 3; i++) {
    const number1 = Math.floor(Math.random() * 100) + 1
    const number2 = Math.floor(Math.random() * 100) + 1

    console.log(`Question: ${number1} ${number2}`)
    const userAnswer = readlineSync.question('Your answer: ')

    const result = getGcd(number1, number2)

    if (userAnswer === String(result)) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

gcd()
