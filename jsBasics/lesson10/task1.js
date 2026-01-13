import chalk from 'chalk';
import { Book } from './Book.js';
import { EBook } from './EBook.js';

let bot = new Book('BOT', 'Max Kidruck', 2012);
let jPark = new Book('Jurassic Park', 'Michael Crichton', 1990);
let it = new Book('It', 'Stephen King', 1986);

// bot.printInfo();
// jPark.printInfo();
// it.printInfo();

// console.log(chalk.bgBlue(bot.name));
// console.log(chalk.bgBlue(it.publisher));
// console.log(chalk.bgBlue(jPark.year));

// console.log(chalk.bgRed(bot.name = 'I'))
// console.log(chalk.bgRed(jPark.publisher = 1234))
// console.log(chalk.bgRed(it.year = 'nice'))

// console.log(chalk.bgGreen(bot.year = 1700))
// console.log(chalk.bgGreen(jPark.name = 'South Park'))
// console.log(chalk.bgGreen(it.publisher = 'L\'ee Ho'))

let bot2 = new EBook('BOT2', 'Max Kidruck', 2012, 'PDF');
let jack = new EBook('White Fang', 'Jack London', 1906, 'EPUB');
let jules = new EBook('10000leagues Under the Sea   ', 'Jules Verne', 1863, 'FB2');

// bot2.printInfo();
// jack.printInfo();
// jules.printInfo();

console.log(chalk.bgBlue(bot2.Format));
console.log(chalk.bgBlue(jack.Format));
console.log(chalk.bgBlue(jules.Format));

// console.log(chalk.bgRed(bot2.Format = 'I'))
console.log(chalk.bgRed((jack.Format = 1234)));

console.log(typeof 1234)
// console.log(chalk.bgRed(jules.Format = 'nice'))
