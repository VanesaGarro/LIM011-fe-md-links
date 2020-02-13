#!/usr/bin/env node
const mdlinks = require('../src/mdlinks');


const cli = (path, options) => {
  if (options === '--validate') {
    mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let string = '';
      data.forEach((element) => {
        string += `${element.file} ${element.href} ${element.statusText} ${element.status} ${element.text} \n`;
      });
      return console.log(string);
    });
  }
};
console.log(cli('/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md', '--validate'));
