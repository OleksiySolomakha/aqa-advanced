import { Book } from './Book.js';

class EBook extends Book {
	constructor(newTitle, newAuthor, newPublishYear, newFormat) {
        super(newTitle, newAuthor, newPublishYear);
		this.format = newFormat;
	}

	printInfo() {
		console.log(
			`The book "${this.title}" was ` +
				`published in ${this.publishYear}, written by ${this.author},` +
				` in format ${this.format}`
		);
	}

	get Format() {
		return this.format;
	}

	set Format(value) {
		if (!value || typeof value !== 'string' || value.length <= 1) {
			throw new Error('Format must be at least 2 characters long and be a string');
			return;
		}
		this.format = value;
	}
}

export { EBook };