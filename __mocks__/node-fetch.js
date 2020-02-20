const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});
fetchMock
  .mock('https://www.youtube.com/watch?v=WgSc1nv_4Gw', 200)
  .mock('https://www.youtube.com/watchtt', 400)
  .mock('https://carlosazaustre.com/manejando-la-asincronia-en-javascript/', { status: 'no tiene status' })
  .mock('https://www.genbeta.com/desarrollo/node-js-y-npm', 200)
  .mock('https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s', 200);
module.exports = fetchMock;
