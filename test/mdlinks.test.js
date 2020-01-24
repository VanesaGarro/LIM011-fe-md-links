const isAbsolute = require('../src/mdlinks');

describe('funcion que retorna si una ruta es absoluta', () => {
  it('debería ingresar una ruta absoluta y retorna true', () => {
    const inputAbsolute = '/test/demo_path.js';
    expect(isAbsolute(inputAbsolute)).toEqual(true);
  });
  it('debería ingresar una ruta relativa y retorna false', () => {
    const inputRelative = 'test/demo_path.js';
    expect(isAbsolute(inputRelative)).toEqual(false);
  });
});
