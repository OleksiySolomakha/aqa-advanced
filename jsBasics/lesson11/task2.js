let toDoValidLnk = 'https://jsonplaceholder.typicode.com/todos/1';
let userValidLink = 'https://jsonplaceholder.typicode.com/users/1';

//Use this variable to get an error
let invalidLink = 'https://jsonplaceholder.typicode.com';

function getTodo(link) {
	fetch(link)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(response.statusText);
			}
		})
		.then((data) => {
			console.log('We get this data from the link: ', data);
		})
		.catch((error) => {
			console.error('We get some problem with this link');
		});
}

function getUser(link) {
	fetch(link)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(response.statusText);
			}
		})
		.then((data) => {
			console.log('We get this user data from the link: ', data);
		})
		.catch((error) => {
			console.error("We can't get information about User from this link");
		});
}

// getTodo(toDoValidLnk);
// getUser(userValidLink);

// getTodo(invalidLink);
// getUser(invalidLink);

// const getAll = Promise.all([getTodo(toDoValidLnk), getUser(userValidLink)])
// const getAllError = Promise.all([getUser(invalidLink), getTodo(userValidLink)])

const getRace = Promise.race([getTodo(invalidLink), getUser(userValidLink)]);
