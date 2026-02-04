const axios = require('axios');

const link = 'https://httpbin.org/image/';
let format = 'png'
let headersValue = 'hahahahhaaha'

async function getImageByFormat(imageFormat, customHeader) {
    try {
        const response = await axios.get(link + imageFormat, {
            headers: {
                'Custom-Header': customHeader
            },
            responseType: 'arraybuffer'
        });
        return response;
    } catch(error) {
        console.log(error.message);
    }
}

test('Testing Request Headers and Params', async() => {
    const res = await getImageByFormat(format, headersValue);

    // console.log(res)
    expect(res.config.headers['Custom-Header']).toBe(headersValue);
    expect(res.config.url).toBe(link + format);
})