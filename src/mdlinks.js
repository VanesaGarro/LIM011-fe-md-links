const path = require('path');
const fs = require('fs');

const isAbsolute = (input) => (path.isAbsolute(input));
const convertToAbsolute = (input) => (path.resolve(input));


const readDir = (dir) => {
  fs.readdir(dir, (err, archivos) => {
    if (err) {
      // eslint-disable-next-line no-undef
      onError(err);
      return;
    }
    console.log(archivos);
  });
};
module.exports = {
  isAbsolute, convertToAbsolute, readDir,
};
