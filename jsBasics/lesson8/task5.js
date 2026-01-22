import chalk from 'chalk';

const firstArray = [2, 4, 'green', 'Subaru'];
const secondArray = [1, 9, 'red', 'BMW'];

function addMassives(first, second) {
	return first.concat(second);
}

let concatMas = addMassives(firstArray, secondArray);

console.log(chalk.bgYellow('firstArray =', firstArray));
console.log(chalk.bgBlue('secondArray =', secondArray));
console.log(chalk.bgGreen('concatMas =', concatMas));
