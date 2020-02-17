#!/usr/bin/env node
const mdLinks = require('./mdlinks-cli');

const path = process.argv[2];
const options = {
  validate: process.argv[3],
  stats: process.argv[4],
};
mdLinks.cli(path, options).then((res) => console.log(res)).catch(() => console.log('ingrese path'));
