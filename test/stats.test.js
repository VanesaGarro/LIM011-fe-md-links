const path = require('path');
const stats = require('../src/stats');

const inputValidate = [{
  href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
  text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
  file: path.resolve(__dirname, '../readme2.md'),
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://www.youtube.com/watchtt',
  text: 'link de prueba - prueba',
  file: path.resolve(__dirname, '../readme2.md'),
  status: 404,
  statusText: 'FAIL',
},
{
  href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
  text: 'Asíncronía en js',
  file: path.resolve(__dirname, '../readme2.md'),
  status: 'No tiene Status',
  statusText: 'FAIL',
}];
describe('funcion que devuelve la cantidad de links', () => {
  it('Deberia ingresar un array y retornar la cantidad de links', () => {
    const total = 3;
    expect(stats.totalStats(inputValidate)).toEqual(total);
  });
  it('Deberia un array y retornar la cantidad de links rotos', () => {
    const total = 2;
    expect(stats.brokenStats(inputValidate)).toEqual(total);
  });
  it('Deberia un array y retornar la cantidad de links que no se repiten', () => {
    const total = 3;
    expect(stats.uniqueStats(inputValidate)).toEqual(total);
  });
});
