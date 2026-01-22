import chalk from 'chalk';

function devide(numerator, denominator) {
	if (denominator === 0) {
		console.log(chalk.red('The denominator is 0'));
	} else if (typeof denominator !== 'number') {
		console.error(chalk.bgRed('Denominator is not a number!!!'));
	} else if (typeof numerator !== 'number') {
		console.error(chalk.bgBlue('Numerator is not a number!!!'));
	} else {
		return console.log(chalk.green(numerator / denominator));
	}
}

devide(12, 3);
devide(10, 0);
devide(null, 1);
devide(7, '7');

try {
	devide(25, 5);
} catch (error) {
	error.message;
} finally {
	console.log(chalk.green('Робота завершена'));
}

try {
	devide(6, 0);
} catch (error) {
	error.message;
} finally {
	console.log(chalk.green('Робота завершена'));
}

try {
	devide(6, 'mas');
} catch (error) {
	error.message;
} finally {
	console.log(chalk.green('Робота завершена'));
}

try {
	devide(null, 123);
} catch (error) {
	error.message;
} finally {
	console.log(chalk.green('Робота завершена'));
}
