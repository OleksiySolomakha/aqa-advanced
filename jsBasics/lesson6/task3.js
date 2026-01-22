import chalk from 'chalk';

function checkOrder(available, ordered) {
	if (available < ordered) {
		console.log(chalk.bgCyanBright('Your order is too large, we don’t have enough goods'));
	} else if (ordered == 0) {
		console.log(chalk.bgMagentaBright('Your order is empty'));
	} else {
		console.log(chalk.bgWhite('Your order is accepted'));
	}
}

checkOrder(15, 33);
checkOrder(1, 0);
checkOrder(3, 2);
