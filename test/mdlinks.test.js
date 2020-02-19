const path = require('path');
const mdlinks = require('../src/mdlinks');

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


describe('mdLinks,funcion que devuelve un arreglo de objetos', () => {
  it('Debería ingresar un string con la ruta mas el objeto validate con la propiedad true y retorna un array de objetos con las propiedades href,text,file,status,statusText', (done) => {
    const route = path.resolve(__dirname, '../readme2.md');
    const object = { validate: true };
    mdlinks.mdLinks(route, object).then((res) => {
      expect(res).toEqual(outputValidate);
      done();
    });
  });
});
it('Debería ingresar un string con la ruta mas el objeto validate con la propiedad false y retorna un array de objetos con las propiedades href,text,file', (done) => {
  const route = path.resolve(__dirname, '../readme2.md');
  const object = { validate: false };
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

  mdlinks.mdLinks(route, object).then((res) => {
    expect(res).toEqual(output);
    done();
  });
});
