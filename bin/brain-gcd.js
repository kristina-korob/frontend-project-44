import readlineSync from 'readline-sync';

// Функция для поиска НОД
const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))

const gcd = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Find the greatest common divisor of given numbers.')

  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1

  console.log(`Question: ${num1} ${num2}`)
  const userAnswer = readlineSync.question('Your answer: ')

  const result = getGcd(num1, num2)

  if (userAnswer === String(result)) {
    console.log('Correct!')
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`)
    console.log(`Let's try again, ${name}!`)
  }
}

gcd()
