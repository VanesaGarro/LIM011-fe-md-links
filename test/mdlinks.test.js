const mdlinks = require('../src/index');

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
describe('Función que retorna un array de objetos con las propiedades href, text, file', () => {
  it('Debería ingresar una ruta y retornar un array de objetos con las propiedades href,text,file', () => {
    const inputRelative = '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md';
    const output = [{
      href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
      text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
      file: '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md',
    }];
    expect(mdlinks.getLinks(inputRelative)).toEqual(output);
  });
});
describe('funcion que busca archivos md', () => {
  it('Deberia ingresar una ruta y retornar un array con los archivos md', () => {
    const input = '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba';
    const output = ['/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/carpeta2/read.md', '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/probando.md'];
    expect(mdlinks.searchMdFiles(input)).toEqual(output);
  });
});
