# Mi Módulo de Codificación

[![NPM Version](https://img.shields.io/npm/v/code-module64.svg)](https://www.npmjs.com/package/code-module64)
[![License](https://img.shields.io/github/license/davidjose47sudo/code-module64)](https://github.com/davidjose47sudo/code-module64/blob/main/LICENSE)

Un módulo simple de codificación para codificar y decodificar datos.

## Instalación

npm install code-module64

## Uso

### `encode(datos: datoSendencode): Promise<any>`

Codifica los datos proporcionados y los envía a un servidor remoto para su procesamiento.

#### Parámetros

- `datos` (datoSendencode): Los datos a codificar. Debe ser un objeto con las siguientes propiedades:
  - `secret` (string): El secreto para la codificación.
  - `data` (object): Los datos a codificar.

#### Ejemplo

```javascript
const { encode } = require('code-module64');

const datos = {
  secret: 'soloyo',
  data: {
    Information: 'hey bro tengo cosas'
  }
};

encode(datos)
  .then(respuesta => {
    console.log('Datos codificados:', respuesta);
  })
  .catch(error => {
    console.error('Error al codificar los datos:', error);
  });

decode(datos: datoSendecode): Promise<any>
Decodifica los datos proporcionados y los envía a un servidor remoto para su procesamiento.

Parámetros
datos (datoSendecode): Los datos a decodificar. Debe ser un objeto con las siguientes propiedades:
text (string): El texto a decodificar.
key (string): La clave para la decodificación.

const { decode } = require('code-module64');

const datos = {
  text: 'mi texto codificado',
  key: 'mi clave secreta'
};

decode(datos)
  .then(respuesta => {
    console.log('Datos decodificados:', respuesta);
  })
  .catch(error => {
    console.error('Error al decodificar los datos:', error);
  });
  
#### Contribución
¡Siéntete libre de contribuir a este proyecto! Si encuentras algún problema, tienes alguna idea de mejora o quieres agregar nuevas características, puedes abrir un issue o enviar un pull request.

#### Licencia
Este proyecto está licenciado bajo la Licencia MIT.
