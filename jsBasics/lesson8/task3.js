import chalk from 'chalk';

const nums = [10, 20, 30, 40, 50];

function addIndexes(massive) {
	return massive.reduce((sum, number) => sum + number);
}

let newNums = addIndexes(nums);

console.log(chalk.bgRedBright('nums', nums));
console.log(chalk.bgGreenBright('newNums', newNums));
