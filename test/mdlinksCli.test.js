const path = require('path');
const mdlinkscli = require('../src/mdlinks-cli');

describe('cli,funcion que devuelve en un string la ruta del archivo y sus propiedades', () => {
  it('debería retornar la informacion del link, ruta, href, text,status,statustext', (done) => {
    const ouputcli = `${path.resolve(__dirname, '../prueba/probando.md')} https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s OK 200 Pill de recursión - video \n`;
    return mdlinkscli.cli(path.resolve(__dirname, '../prueba/probando.md'), { stats: '--validate' }).then((res) => {
      expect(res).toEqual(ouputcli);
      done();
    });
  });
  it('debería retornar la informacion del link, la ruta, href, text', (done) => {
    const ouputcli = `${path.resolve(__dirname, '../prueba/probando.md')} https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s Pill de recursión - video \n`;
    return mdlinkscli.cli(path.resolve(__dirname, '../prueba/probando.md'), { stats: undefined }).then((res) => {
      expect(res).toEqual(ouputcli);
      done();
    });
  });
  it('debería retornar el total de links y la cantidad de links únicos', (done) => {
    const ouputcli = `${'Total: 1'}\n${'Uniques: 1'}`;
    return mdlinkscli.cli(path.resolve(__dirname, '../prueba/probando.md'), { stats: '--stats' }).then((res) => {
      expect(res).toEqual(ouputcli);
      done();
    });
  });
  it('debería retornar el total de links ,total de links únicos y el total de links rotos', (done) => {
    const ouputcli = `${'Total: 1'}\n${'Uniques: 1'}\n${'Broken: 0'}`;
    return mdlinkscli.cli(path.resolve(__dirname, '../prueba/probando.md'), { stats: '--stats', validate: '--validate' }).then((res) => {
      expect(res).toEqual(ouputcli);
      done();
    });
  });
});
