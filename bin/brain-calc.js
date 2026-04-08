#!/usr/bin/env node
import readlineSync from 'readline-sync'

const calculator = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('What is the result of the expression?')

  const win = 3
  let process = 0

  while (process < win) {
    const number1 = Math.floor(Math.random() * 100) + 1
    const number2 = Math.floor(Math.random() * 100) + 1
    const operators = ['+', '-', '*']
    const random = operators[Math.floor(Math.random() * operators.length)]

    console.log(`Question: ${number1} ${random} ${number2}`)

    const userAnswer = readlineSync.question('Your answer: ')
    let result
    switch (random) {
      case '+':
        result = number1 + number2
        break
      case '-':
        result = number1 - number2
        break
      case '*':
        result = number1 * number2
        break
    }

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

calculator()
