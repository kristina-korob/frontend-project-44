#!/usr/bin/env node
import readlineSync from 'readline-sync'

const progression = () => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    console.log('What number is missing in the progression?')

    const win = 3
    let process = 0

    while (process < win) {
        const start = Math.floor(Math.random() * 100) + 1
        const step = Math.floor(Math.random() * 10) + 2
        const length = Math.floor(Math.random() * 6) + 5
        const hiddenIndex = Math.floor(Math.random() * length)

        const progression = []
        for (let i = 0; i < length; i += 1) {
            progression.push(start + step * i)
        }

        const correctAnswer = progression[hiddenIndex].toString()
        progression[hiddenIndex] = '..'

        console.log(`Question: ${progression.join(' ')}`)
        const userAnswer = readlineSync.question('Your answer: ')

        if (userAnswer === correctAnswer) {
            console.log('Correct!')
        }
        else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }

    console.log(`Congratulations, ${name}!`)
}

progression()
