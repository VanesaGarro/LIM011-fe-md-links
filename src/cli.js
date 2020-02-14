#!/usr/bin/env node
const mdlinks = require('../src/mdlinks');
const stats = require('../src/stats');

const path = process.argv[2];
const options = process.argv[3];
const cli = () => {
  if (options === '--validate') {
    mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let validate = '';
      data.forEach((element) => {
        validate += `${element.file} ${element.href} ${element.statusText} ${element.status} ${element.text} \n`;
      });
      return console.log(validate);
    });
  } if (options === undefined) {
    mdlinks.mdLinks(path, { validate: false }).then((data) => {
      let links = '';
      data.forEach((element) => {
        links += `${element.file} ${element.href} ${element.text} \n`;
      });
      return console.log(links);
    });
  } if (options === '--stats') {
    let s = '';
    s += `Total:${stats.totalStats(mdlinks.mdLinks)}`;
    return console.log(s);
  }
  return console.log('k');
};
console.log(cli());
