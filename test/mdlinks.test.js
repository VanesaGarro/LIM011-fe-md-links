const index = require('../src/index');
const validate = require('../src/validate');
const stats = require('../src/stats');
// const mdlinks = require('../src/mdlinks');

const inputValidate = '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md';
const outputValidate = [{
  href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
  text:
 '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
  file: '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://www.youtube.com/watchtt',
  text: 'link de prueba - prueba',
  file: '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md',
  status: 404,
  statusText: 'FAIL',
},
{
  href:
 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
  text: 'Asíncronía en js',
  file: '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md',
  status: 'No tiene Status',
  statusText: 'FAIL',
}];
describe('funcion que retorna si una ruta es absoluta', () => {
  it('debería ingresar una ruta absoluta y retorna true', () => {
    const inputAbsolute = '/home/vanesa/Escritorio/LIM011-fe-md-links/README.md';
    expect(index.isAbsolute(inputAbsolute)).toEqual(true);
  });
  it('debería ingresar una ruta relativa y retorna false', () => {
    const inputRelative = '../LIM011-fe-md-links/README.md';
    expect(index.isAbsolute(inputRelative)).toEqual(false);
  });
});
describe('funcion que convierte una ruta relativa en absoluta', () => {
  it('debería ingresar una ruta y retornar un string de la ruta convertida a absoluta', () => {
    const input = 'README.md';
    const output = '/home/vanesa/Escritorio/LIM011-fe-md-links/README.md';
    expect(index.convertToAbsolute(input)).toEqual(output);
  });
});
describe('Función que retorna un array de objetos con las propiedades href, text, file', () => {
  it('Debería ingresar una ruta y retornar un array de objetos con las propiedades href,text,file', () => {
    const inputRelative = '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md';
    const output = [{
      href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
      text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
      file: '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md',
    },
    {
      href: 'https://www.youtube.com/watchtt',
      text: 'link de prueba - prueba',
      file: '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md',
    },
    {
      href:
     'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
      text: 'Asíncronía en js',
      file: '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md',
    }];
    expect(index.getLinks(inputRelative)).toEqual(output);
  });
});
describe('funcion que busca archivos md', () => {
  it('Deberia ingresar una ruta y retornar un array con los archivos md', () => {
    const input = '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba';
    const output = ['/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/carpeta2/read.md', '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/probando.md'];
    expect(index.searchMdFiles(input)).toEqual(output);
  });
});
describe('funcion que valida los links', () => {
  it('', (done) => {
    validate.validateLinks(inputValidate).then((res) => {
      expect(res).toEqual(outputValidate);
      done();
    });
  });
});
describe('funcion que devuelve la cantidad de links', () => {
  it('Deberia ingresar un array y retornar la cantidad de links', () => {
    const output = 3;
    expect(stats.totalStats(outputValidate)).toEqual(output);
  });
  it('Deberia un array y retornar la cantidad de links rotos', () => {
    const output = 2;
    expect(stats.brokenStats(outputValidate)).toEqual(output);
  });
  it('Deberia un array y retornar la cantidad de links rotos', () => {
    const output = 3;
    expect(stats.uniqueStats(outputValidate)).toEqual(output);
  });
});
