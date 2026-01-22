import chalk from 'chalk';

function agesm(age) {
	if (age < 18) {
		console.log(chalk.bgYellowBright('You are too young, youre age is: ', age));
	} else if (age) {
		console.log(chalk.bgGreenBright(`Welcome to the club buddy, ${age} is enought`));
	}
}

agesm(15);
agesm(25);
