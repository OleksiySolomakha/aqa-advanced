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

	get title() {
		return this._title;
	}

	get author() {
		return this._author;
	}

	get publishYear() {
		return this._publishYear;
	}

	set title(value) {
		if (value.length <= 1) {
			throw new Error('Title must be at least 2 characters long');
		}
		this._title = value;
	}

	set author(value) {
		if (value.length <= 5 || typeof value !== 'string') {
			throw new Error('Author must be at least 5 characters long and be a string');
		}
		this._author = value;
	}

	set publishYear(value) {
		if(value < 1700 || value > 2026 || typeof value !== 'number') {
			throw new Error('Publish year must be more then 1700 and less then 2026, and must be a number');
		}
		this._publishYear = value;
	}

	static findOldestBook(arrayOfBooks) {
		if(!Array.isArray(arrayOfBooks) || arrayOfBooks.length === 0) {
			throw new Error('Array of books is invalid or empty')
		}

		return arrayOfBooks.reduce((oldest, current) => {
			if(current.publishYear < oldest.publishYear) {
				return current;
			} else {
				return oldest;
			}
		});
	}
}

export { Book };
