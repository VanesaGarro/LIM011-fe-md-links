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
      href:
      'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
      text: 'expresiones regulares (<code>RegExp</code>)',
      file: '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md',
    }];
    expect(mdlinks.extraerLinks(inputRelative)).toEqual(output);
  });
});
describe('funcion que valida los links', () => {
  it('Deberia ingresar una ruta y retornar un array con las propiedades href,text,file,status,statusText', () => {
    const input = '/home/vanesa/Escritorio/LIM011-fe-md-links/readme2.md';
    const output = 'l';
    expect(mdlinks.validateLinks(input)).toEqual(output);
  });
});
