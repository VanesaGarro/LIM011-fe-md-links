const mdlinks = require('../src/mdlinks');

describe('funcion que retorna si una ruta es absoluta', () => {
  it('debería ingresar una ruta absoluta y retorna true', () => {
    const inputAbsolute = 'C:/Users/Vanesa/Desktop/LIM011-fe-md-links/README.md';
    expect(mdlinks.isAbsolute(inputAbsolute)).toEqual(true);
  });
  it('debería ingresar una ruta relativa y retorna false', () => {
    const inputRelative = '../LIM011-fe-md-links/README.md';
    expect(mdlinks.isAbsolute(inputRelative)).toEqual(false);
  });
});
describe('', () => {
  it('Debería ingresar una ruta ', () => {
    const inputRelative = 'C:/Users/Vanesa/Desktop/LIM011-fe-md-links/README.md';
    expect(mdlinks.extraerLinks(inputRelative)).toEqual('C:/Users/Vanesa/Desktop/LIM011-fe-md-links/README.md');
  });
});
