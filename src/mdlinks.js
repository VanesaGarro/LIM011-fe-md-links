const validateLinks = (ruta) => {
  const array = [];
  extraerLinks(ruta).forEach((element) => {
    fetch(element.href)
      .then((response) => {
        if ((response.status >= 200) && (response.status <= 399)) {
          array.push({
            status: response.status,
            message: 'OK',
          });
        } else {
          array.push({
            status: response.status,
            message: 'FAIL',
          });
        }
        console.log(array);

        return array;
      });
  });
};
// - [link que no existe](https://www.k.com)