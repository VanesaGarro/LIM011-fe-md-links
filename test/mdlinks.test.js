const isAbsolute = require('../src/mdlinks');

test('Funcion que retorna si la ruta es absoluta o no', () => {
  expect(isAbsolute()).toBe('hola');
});
