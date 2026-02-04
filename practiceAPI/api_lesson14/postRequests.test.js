const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com';

let postTitle = 'Test post';
let postBody = 'Why I check this?';
let postUserId = 100;

describe('Post request practice', () => {
	test('Create post', async () => {
		const response = await axios.post(`${url}/posts`, {
			title: postTitle,
			body: postBody,
			userId: postUserId,
		});
		expect(response.status).toBe(201);
		expect(response.statusText).toBe('Created');
		expect(response.data.title).toEqual(postTitle);
		expect(response.data.body).toEqual(postBody);
		expect(response.data.userId).toEqual(postUserId);
	});

	test('Create post with invalid userId', async () => {
		const response = await axios.post(
			`${url}/post`,
			{
				title: postTitle,
				body: postBody,
				userId: postUserId,
			},
			{
				validateStatus: () => true,
			}
		);
		expect(response.status).toBe(404);
		expect(response.data).toEqual({});
	});

	test('Create post withot body', async () => {
		const response = await axios.post(`${url}/posts`, {
			title: postTitle,
			userId: postUserId,
		});
		expect(response.status).toBe(201);
		expect(response.statusText).toBe('Created');
		expect(response.data.title).toEqual(postTitle);
		expect(response.data.body).toBeUndefined();
		expect(response.data.userId).toEqual(postUserId);
	});

	test('Create post without title', async () => {
		const response = await axios.post(`${url}/posts`, {
			body: postBody,
			userId: postUserId,
		});
		expect(response.status).toBe(201);
		expect(response.statusText).toBe('Created');
		expect(response.data.title).toBeUndefined();
		expect(response.data.body).toEqual(postBody);
		expect(response.data.userId).toEqual(postUserId);
	});

	test('Create post without userId', async () => {
		const response = await axios.post(`${url}/posts`, {
			title: postTitle,
			body: postBody,
		});
		expect(response.status).toBe(201);
		expect(response.statusText).toBe('Created');
		expect(response.data.title).toEqual(postTitle);
		expect(response.data.body).toEqual(postBody);
		expect(response.data.userId).toBeUndefined();
	});
});
