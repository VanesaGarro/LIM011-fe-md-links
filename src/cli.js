#!/usr/bin/env node
const mdlinks = require('../src/mdlinks');

const [,, ...args] = process.argv;
console.log(`hello word ${args}`);
console.log(process.argv);
// process.argv[2] = true;

const cliFunction = (path, options) => {
  if (path !== undefined && options.validate === undefined) {
    mdlinks.mdLinks(path, options).then((res) => console.log(res));
  } else {
    console.log('a');
  }
};
// eslint-disable-next-line max-len
console.log(cliFunction('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md', { validate: true }));
