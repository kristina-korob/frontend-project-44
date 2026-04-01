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
        const result = `${number1} ${random} ${number2}`
        const even = number % 2 === 0 ? "yes" : "no"
        console.log(`Question: ${number}`)
        const userAnswer = readlineSync.question('Your answer: ')

        if (userAnswer === even) {
            console.log('Correct!')
            process += 1
        }
        else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${even}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }

    console.log(`Congratulations, ${name}!`)
}

calculator()
