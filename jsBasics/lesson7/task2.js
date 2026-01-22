import chalk from 'chalk';

function showNum(number) {
	if (number >= 1) {
		console.log(`My number is ${number}`);
		return showNum(number - 1);
	} else console.log(chalk.bgRed(`My number is ${number} now`));
}

showNum(9);
