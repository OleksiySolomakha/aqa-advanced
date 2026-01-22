import chalk from 'chalk';

const startNumbers = [1, 2, 3, 4, 5];

// If I understand correctly it must be looks like this.

function multipleMassive(massive) {
	return massive.map((value, index) => value * index);
}

const indeksNumbers = multipleMassive(startNumbers);

console.log(chalk.bgCyan('startNumbers =', startNumbers));
console.log(chalk.bgGreen('indeksNumbers =', indeksNumbers));
