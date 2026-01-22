import chalk from 'chalk';

const book = {
	title: 'Golden Linkor',
	author: 'Donald Orange',
	year: 2025,
};

let title = book.title;
let author = book.author;

console.log(chalk.green(title), ' by ', chalk.red(author));
