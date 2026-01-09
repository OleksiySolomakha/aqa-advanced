import chalk from "chalk"

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0,
    negativeCount = 0,
    zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++
    } else if (numbers[i] < 0) {
        negativeCount++
    } else {
        zeroCount++
    }
}

console.log(chalk.green('Кількість позитивних чисел: ', positiveCount));
console.log(chalk.red('Кількість негативних чисел: ', negativeCount));
console.log(chalk.blueBright('Кількість нульових чисел: ', zeroCount));