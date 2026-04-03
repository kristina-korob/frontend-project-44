#!/usr/bin/env node
import readlineSync from 'readline-sync'

const prime = () => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')


    
    const win = 3
    let process = 0

    while (process < win) {
        const number1 = Math.floor(Math.random() * 100) + 1
        let result
        switch (number1) {
            case (number1 < 2):
                result = "no"
                break;
            case (number1 === 2):
                result = "yes"
                break;
            case (number1 % 2 === 0):
                result = "no"
                break;
            case (number1 % 2 !== 0):
                const limit = Math.sqrt(number1)
                for (let i = 3; i <= limit; i += 2) {
                    if (n % i === 0) {
                        result = "no"
                    }
                }
                break;
            default:
                result = "yes"
        }

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
}

prime()