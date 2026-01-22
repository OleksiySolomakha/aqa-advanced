import chalk from 'chalk';

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNums(massive) {
	return massive.filter((number) => number % 2 === 0);
}

let evenFromMas = filterEvenNums(nums);

console.log(chalk.yellow('nums =', nums));
console.log(chalk.green('evenFromMas =', evenFromMas));
