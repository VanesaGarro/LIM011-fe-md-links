const mdlinks = require('../src/mdlinks');

describe('funcion que retorna si una ruta es absoluta', () => {
  it('debería ingresar una ruta absoluta y retorna true', () => {
    const inputAbsolute = '/home/vanesa/Escritorio/LIM011-fe-md-links/README.md';
    expect(mdlinks.isAbsolute(inputAbsolute)).toEqual(true);
  });
  it('debería ingresar una ruta relativa y retorna false', () => {
    const inputRelative = '../LIM011-fe-md-links/README.md';
    expect(mdlinks.isAbsolute(inputRelative)).toEqual(false);
  });
});
describe('funcion que convierte una ruta relativa en una ruta absoluta', () => {
  it('Debería ingresar una ruta relativa y convertirla a absoluta', () => {
    const inputRelative = '/hola.html';
    expect(mdlinks.convertToAbsolute(inputRelative)).toEqual('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md');
  });
});
describe('funcion que lee el contenido de un arhivo', () => {
  it('Deberia ingresar un archivo y leer el contenido', () => {
    const inputFile = 'src';
    expect(mdlinks.readDir(inputFile)).toEqual('[mdlinks.js]');
  });
});
