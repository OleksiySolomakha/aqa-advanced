import chalk from 'chalk';
import { Book } from './Book.js';
import { EBook } from './EBook.js';

let bot = new Book('BOT', 'Max Kidruck', 2012);
let jPark = new Book('Jurassic Park', 'Michael Crichton', 1990);
let it = new Book('It', 'Stephen King', 1986);

let bot2 = new EBook('BOT2', 'Max Kidruck', 2012, 'PDF');
let jack = new EBook('White Fang', 'Jack London', 1906, 'EPUB');
let jules = new EBook('10000leagues Under the Sea   ', 'Jules Verne', 1863, 'FB2');

// bot.printInfo();
// jPark.printInfo();
// it.printInfo();

// console.log(chalk.bgBlue(bot.title));
// console.log(chalk.bgBlue(it.author));
// console.log(chalk.bgBlue(jPark.publishYear));

// console.log(chalk.bgRed(bot.title = 'I'))
// console.log(chalk.bgRed(jPark.author = 1234))
// console.log(chalk.bgRed(it.publishYear = 'nice'))

// console.log(chalk.bgGreen(bot.publishYear = 1700))
// console.log(chalk.bgGreen(jPark.title = 'South Park'))
// console.log(chalk.bgGreen(it.author = 'L\'ee Ho'))

// bot2.printInfo();
// jack.printInfo();
// jules.printInfo();

// console.log(chalk.bgBlue(bot2.format));
// console.log(chalk.bgBlue(jack.format));
// console.log(chalk.bgBlue(jules.format));

// console.log(chalk.bgRed(bot2.Format = 'I'))
// console.log(chalk.bgRed((jack.format = 1234)));
// console.log(chalk.bgRed(jules.Format = 'nice'))

// let oldArr = [bot, bot2, jack, it];
// let oldest = Book.findOldestBook(oldArr);
// oldest.printInfo();

// let botEbook = EBook.addBookFormat(bot, 'fb2');
// botEbook.printInfo();
