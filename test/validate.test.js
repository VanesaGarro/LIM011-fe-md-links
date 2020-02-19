const path = require('path');
const validate = require('../src/validate');

const inputValidate = path.resolve(__dirname, '../readme2.md');
const outputValidate = [{
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
describe('validateLinks, funcion que valida los links', () => {
  it('debería de ingresar la ruta del archivo md y retornar un array de objetos con las propiedades href,text,status,statusText', (done) => {
    validate.validateLinks(inputValidate).then((res) => {
      expect(res).toEqual(outputValidate);
      done();
    });
  });
});
