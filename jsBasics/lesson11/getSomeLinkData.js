class GetSomeLinkData {
	constructor(link) {
		this.link = link;
	}

	getLinkData() {
		return fetch(this.link)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Something goes wrong');
				} else {
					return response.json();
				}
			})
			.then((data) => {
				console.log('the data from link is: ', data);
				return data;
			})
			.catch((error) => {
				console.error("It's probably:", error.message);
			});
	}
}

export { GetSomeLinkData };
