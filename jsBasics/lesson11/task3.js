import { GetSomeLinkData } from './getSomeLinkData.js';

let toDoValidLnk = 'https://jsonplaceholder.typicode.com/todos/1';
let userValidLink = 'https://jsonplaceholder.typicode.com/users/1';

//Use this variable to get an error
let invalidLink = 'https://jsonplaceholder.typicode.com';

async function getLinkData(url) {
	const response = await fetch(url);
	try {
		const data = await response.json();
		console.log('GET Response:', data);
	} catch (error) {
		console.error("It's probebly:", error);
	}
}

//   getLinkData(userValidLink);
//   getLinkData(invalidLink);
//   getLinkData(toDoValidLnk)

// Task 4
let myToDo = new GetSomeLinkData(toDoValidLnk);
let myUser = new GetSomeLinkData(userValidLink);
let myError = new GetSomeLinkData(invalidLink);

// myToDo.getLinkData();
myUser.getLinkData();
// myError.getLinkData();
