const axios = require('axios');
const url = 'https://dogapi.dog/api/v2/';

let breedId = '036feed0-da8a-42c9-ab9a-57449b530b13';
let breedName = 'Affenpinscher';
let groupID = '8000793f-a1ae-4ec4-8d55-ef83f1f644e5';

describe('Check dogs API library', () => {
	test('Get all dogs breed', async () => {
		const response = await axios.get(`${url}/breeds`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		expect(response.status).toBe(200);
		expect(response.data.data.length).toBeGreaterThan(0);
		expect(typeof response.data.data[0].id).toBe('string');
		expect(typeof response.data.data[0].type).toBe('string');
		expect(typeof response.data.data[0].attributes).toBe('object');
	});

	test('Get only one dog breed', async () => {
		const response = await axios.get(`${url}/breeds/${breedId}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		expect(response.status).toBe(200);
		expect(response.data.data).not.toBeNull();
		expect(response.data.data.id).toEqual(breedId);
		expect(typeof response.data.data.attributes.name).toBe('string');
		expect(response.data.data.attributes.name).toEqual(breedName);
		expect(typeof response.data.data.attributes.description).toBe('string');
		expect(typeof response.data.data.attributes.hypoallergenic).toBe('boolean');
	});

	test('Get some fact about breed', async () => {
		const response = await axios.get(`${url}/facts?limit=2`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		expect(response.status).toBe(200);
		expect(response.data.data.length).toBeGreaterThan(0);
		expect(typeof response.data.data[1].id).toBe('string');
		// expect(typeof response.data.data[1].id).toBe('number');
		expect(typeof response.data.data[1].id).toBe('string');
		expect(typeof response.data.data[1].attributes.body).toBe('string');
	});

	test('Get an error if we use invalid index', async () => {
		const response = await axios.get(`${url}/facts?limit=1`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		expect(response.status).toBe(200);
		expect(response.data.data.length).toBeGreaterThan(0);
		expect(typeof response.data.data[1].id).toBe('number');
	});

	test('Get dogs group by ID', async () => {
		const response = await axios.get(`${url}/groups/${groupID}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		expect(response.status).toBe(200);
		expect(response.data.data).not.toBeNull();
		expect(response.data.data.id).toEqual(groupID);
		expect(response.data.data.type).toEqual('group');
	});
});
