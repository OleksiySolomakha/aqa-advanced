class Book {
	constructor(newTitle, newAuthor, newPublishYear) {
		this.title = newTitle;
		this.author = newAuthor;
		this.publishYear = newPublishYear;
	}

	printInfo() {
		console.log(`The book "${this.title}" was` 
			+ `published in ${this.publishYear}, written by ${this.author}.`);
	}

	get name() {
		return this.title;
	}

	get publisher() {
		return this.author;
	}

	get year() {
		return this.publishYear;
	}

	set name(value) {
		if (value.length <= 1) {
			throw new Error('Title must be at least 2 characters long');
			return;
		}
		this.title = value;
	}

	set publisher(value) {
		if (value.length <= 5 && typeof value !== 'string') {
			throw new Error('Author must be at least 5 characters long and be a string');
			return;
		}
		this.author = value;
	}

	set year(value) {
		if(value < 1700 && value > 2026 && typeof value !== 'number') {
			throw new Error('Publish year must be more then 1700 and less then 2026, and must be a number');
			return;
		}
		this.publishYear = value;
	}
}

export { Book };
