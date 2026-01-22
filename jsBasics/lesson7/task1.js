import chalk from 'chalk';
let number;

function handleNum(number, handleEven, handleOdd) {
	if (number % 2 === 0) {
		handleEven();
	} else {
		handleOdd();
	}
}

function handleEven() {
	console.log(chalk.bgYellow('Number is even'));
}

function handleOdd() {
	console.log(chalk.bgBlue('Number is odd'));
}

handleNum(15, handleEven, handleOdd);
handleNum(4, handleEven, handleOdd);
