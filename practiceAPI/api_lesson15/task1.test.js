const axios = require('axios');
let link = 'https://www.lssse.com/';

async function getErrorFromLink(incorrectLink) {
    try{
        await axios.get(incorrectLink)
    } catch(error) {
        return error
    }
}

test('Check function with incorrect link', async() => {
    const error = await getErrorFromLink(link);

    expect(error).toBeDefined();
    expect(error.message).toBe('getaddrinfo ENOTFOUND www.lssse.com');
})