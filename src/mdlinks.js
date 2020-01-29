const path = require('path');
const fs = require('fs');

const isAbsolute = (input) => (path.isAbsolute(input));
const convertToAbsolute = (input) => (path.resolve(input));

const readFile = (input) => fs.readFileSync(input, 'utf8');
const readDirectory = (input) => fs.readdirSync(input);

console.log(readFile('README.md'));
console.log(readDirectory('prueba'));
module.exports = {
  isAbsolute, convertToAbsolute, readFile, readDirectory,
};


/*
const searchRecursive = (dir, pattern) => {
  // array donde irán los archivos md
  let arrayMd = [];
  // Leer el contenido del directorio
  fs.readdirSync(dir).forEach((dirInner) => {
    // obtener la ruta absoluta
    // eslint-disable-next-line no-param-reassign
    dirInner = path.resolve(dir, dirInner);
    // valida si la ruta es un archivo o directorio
    const stat = fs.statSync(dirInner);
    // If path is a directory, scan it and combine results
    if (stat.isDirectory()) {
      arrayMd = arrayMd.concat(searchRecursive(dirInner, pattern));
    }
    // If path is a file and ends with pattern then push it onto results
    if (stat.isFile() && dirInner.endsWith(pattern)) {
      arrayMd.push(dirInner);
    }
  });

  return arrayMd;
};

const files = searchRecursive('prueba', '.md'); // replace dir and pattern
// as you seem fit

console.log(files);
*/
