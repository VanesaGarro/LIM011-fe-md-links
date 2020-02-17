/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
const path = require('path');
const index = require('../src/index');
const validate = require('../src/validate');
const stats = require('../src/stats');
const mdlinks = require('../src/mdlinks');
const mdlinkscli = require('../src/mdlinks-cli');

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
describe('funcion que retorna si una ruta es absoluta', () => {
  it('debería ingresar una ruta absoluta y retorna true', () => {
    const inputAbsolute = path.resolve(__dirname, '../README.md');
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
    const outputr = path.resolve(__dirname, '../README.md');
    expect(index.convertToAbsolute(input)).toEqual(outputr);
  });
});
describe('Función que retorna un array de objetos con las propiedades href, text, file', () => {
  it('Debería ingresar una ruta y retornar un array de objetos con las propiedades href,text,file', () => {
    const inputRelative = path.resolve(__dirname, '../readme2.md');
    expect(index.getLinks(inputRelative)).toEqual(output);
  });
});
describe('funcion que busca archivos md', () => {
  it('Deberia ingresar una ruta y retornar un array con los archivos md', () => {
    const input = path.resolve(__dirname, '../prueba');
    const outputmd = [path.resolve(__dirname, '../prueba/carpeta2/read.md'), path.resolve(__dirname, '../prueba/probando.md')];
    expect(index.searchMdFiles(input)).toEqual(outputmd);
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
    const total = 3;
    expect(stats.totalStats(outputValidate)).toEqual(total);
  });
  it('Deberia un array y retornar la cantidad de links rotos', () => {
    const total = 2;
    expect(stats.brokenStats(outputValidate)).toEqual(total);
  });
  it('Deberia un array y retornar la cantidad de links que no se repiten', () => {
    const total = 3;
    expect(stats.uniqueStats(outputValidate)).toEqual(total);
  });
});
describe('funcion que devuelve un arreglo de objetos', () => {
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
  mdlinks.mdLinks(route, object).then((res) => {
    expect(res).toEqual(output);
    done();
  });
});
describe('funcion que devuelve en un string la ruta del archivo y sus propiedades', () => {
  it('debería retornar la informacion del link, el texto y la ruta ', (done) => {
    const ouputcli = `${path.resolve(__dirname, '../prueba/probando.md')} https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s Pill de recursión - video \n`;
    return mdlinkscli.cli(path.resolve(__dirname, '../prueba/probando.md')).then((res) => {
      expect(res).toEqual(ouputcli);
      done();
    });
  });
  it('debería retornar la informacion del link, la ruta, href, text, status, statusText', (done) => {
    const ouputcli = `${path.resolve(__dirname, '../prueba/probando.md')} https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s OK 200 Pill de recursión - video \n`;
    return mdlinkscli.cli(path.resolve(__dirname, '../prueba/probando.md'), '--validate').then((res) => {
      expect(res).toEqual(ouputcli);
      done();
    });
  });
  it('debería retornar el total de links y la cantidad de links únicos', (done) => {
    const ouputcli = 'Total: 1' + '\n Uniques: 1 \n';
    return mdlinkscli.cli(path.resolve(__dirname, '../prueba/probando.md'), '--stats').then((res) => {
      expect(res).toEqual(ouputcli);
      done();
    });
  });
  it('debería retornar el total de links , la cantidad de links únicos y la cantidad de links rotos', (done) => {
    const ouputcli = 'Total: 1' + '\n Uniques: 1' + '\n Broken: 0';
    return mdlinkscli.cli(path.resolve(__dirname, '../prueba/probando.md'), '--stats --validate').then((res) => {
      expect(res).toEqual(ouputcli);
      done();
    });
  });
});
