import chalk from 'chalk';

const number = 5;

for (let i = 1; i <= 10; i++) {
	console.log(chalk.bgRed(`Using cycle for we multiple ${number} on ${i} result is :`, number * i));
}

let index = 1;
while (index <= 10) {
	console.log(chalk.bgGreen(`Using cycle while we multiple ${number} on ${index} result is :`, number * index));
	index++;
}
