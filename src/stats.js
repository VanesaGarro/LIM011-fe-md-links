
const arrayp = [{
  href: 'https://nodejs.org/es/about/',
  text: 'Acerca de Node.js - Documentación oficial',
  file:
 '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/carpeta2/read.md',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://nodejs.org/api/fs.html',
  text: 'Node.js file system - Documentación oficial',
  file:
 '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/carpeta2/read.md',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s',
  text: 'Pill de recursión - video',
  file:
 '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/probando.md',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://github.com/merunga/pildora-recursion',
  text: 'Pill de recursión - repositorio',
  file:
 '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/probando.md',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://www.youtube.com/ll',
  text: 'link de prueba',
  file:
 '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/probando.md',
  status: 404,
  statusText: 'FAIL',
},
{
  href: 'https://www.k.com',
  text: 'link que no existe',
  file:
 '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/probando.md',
  status: 'No tiene Status',
  statusText: 'FAIL',
},
{
  href: 'https://www.k.com',
  text: 'link que no existe',
  file:
 '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/probando.md',
  status: 'No tiene Status',
  statusText: 'FAIL',
}];

const totalStats = (array) => array.length;
console.log(totalStats(arrayp));
const brokenStats = (array) => array.filter((link) => link.statusText === 'FAIL').length;
console.log(brokenStats(arrayp));
/* const uniqueStats = (array) => {
  const set = new Set(array);
  return Array.from(set);
}; */
// console.log(uniqueStats(arrayp));

const uniqueStats = (array) => {
  const set = new Set(array);
  return console.log(Array.from(set).length);
};

console.log(uniqueStats(arrayp));

module.exports = { totalStats, brokenStats };
