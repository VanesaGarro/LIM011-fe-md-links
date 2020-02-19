const path = require('path');
const index = require('../src/index');

describe('isAbsolute, funcion que retorna si una ruta es absoluta', () => {
  it('debería ingresar una ruta absoluta y retorna true', () => {
    const inputAbsolute = path.resolve(__dirname, '../README.md');
    expect(index.isAbsolute(inputAbsolute)).toEqual(true);
  });
  it('debería ingresar una ruta relativa y retorna false', () => {
    const inputRelative = '../LIM011-fe-md-links/README.md';
    expect(index.isAbsolute(inputRelative)).toEqual(false);
  });
});
describe('convertToAbsolute, funcion que convierte una ruta relativa en absoluta', () => {
  it('debería ingresar una ruta y retornar un string de la ruta convertida a absoluta', () => {
    const input = 'README.md';
    const outputr = path.resolve(__dirname, '../README.md');
    expect(index.convertToAbsolute(input)).toEqual(outputr);
  });
});
describe('getLinks, función que retorna un array de objetos con las propiedades href, text, file', () => {
  it('Debería ingresar una ruta y retornar un array de objetos con las propiedades href,text,file', () => {
    const inputRelative = path.resolve(__dirname, '../readme2.md');
    const output = [{
      href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
      text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
      file: path.resolve(__dirname, '../readme2.md'),
    },
    {
      href: 'https://www.youtube.com/watchtt',
      text: 'link de prueba - prueba',
      file: path.resolve(__dirname, '../readme2.md'),
    },
    {
      href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
      text: 'Asíncronía en js',
      file: path.resolve(__dirname, '../readme2.md'),
    }];

    expect(index.getLinks(inputRelative)).toEqual(output);
  });
});
describe('searchMdFiles, funcion que busca archivos md', () => {
  it('Deberia ingresar una ruta y retornar un array con las rutas de los archivos md', () => {
    const input = path.resolve(__dirname, '../prueba');
    const outputmd = [path.resolve(__dirname, '../prueba/carpeta2/read.md'), path.resolve(__dirname, '../prueba/probando.md')];
    expect(index.searchMdFiles(input)).toEqual(outputmd);
  });
});
