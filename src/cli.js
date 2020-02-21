#!/usr/bin/env node
const mdLinks = require('./mdlinks-cli');

// console.log(process.argv);
const path = process.argv[2];
const options = {
  stats: process.argv[3],
  validate: process.argv[4],
};
mdLinks.cli(path, options).then((res) => console.log(res)).catch(() => console.log('ingrese una ruta'));
