#!/usr/bin/env node
import readlineSync from 'readline-sync'

const gcd = () => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    console.log('Find the greatest common divisor of given numbers.')

    const win = 3
    let process = 0
    
    while (process < win) {
        let number1 = Math.abs(Math.floor(Math.random() * 100) + 1)
        let number2 = Math.abs(Math.floor(Math.random() * 100) + 1)

        console.log(`Question: ${number1} ${number2}`)
        const userAnswer = readlineSync.question('Your answer: ')

        let result
        let x
        if(number1 === number2) {
            result = number1
        }
        else  while (number2 !== 0) {
            const temp = number2
            number2 = number1 % number2
            x = Math.round(number2 * 10)
            number1 = temp
        }
        result = number1

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

gcd()