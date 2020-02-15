const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});
fetchMock
  .mock('https://www.youtube.com/watch?v=WgSc1nv_4Gw', 200)
  .mock('https://www.youtube.com/watchtt', 400)
  .mock('https://www.genbeta.com/desarrollo/node-js-y-npm', 200);
