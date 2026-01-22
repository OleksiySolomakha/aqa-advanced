import chalk from 'chalk';

function delayText(text = 'Nice try', miliseconds = 1500) {
	setTimeout(function () {
		console.log(chalk.green(`Your text is: ${text}`));
	}, miliseconds);
}

delayText();
delayText('Super dooper!', 2500);
