# Módulo de Codificación

[![NPM Version](https://img.shields.io/npm/v/code-module64.svg)](https://www.npmjs.com/package/code-module64)
![Bower](https://img.shields.io/bower/l/A?style=plastic)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/davidjose47sudo/code-module64?style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/davidjose47sudo/code-module64)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/davidjose47sudo/code-module64)

Un módulo simple de codificación para codificar y decodificar datos.

## Instalación

npm install code-module64

## Uso

### `encode(datos: datoSendencode): Promise<any>`

Codifica los datos proporcionados y los envía a un servidor remoto para su procesamiento.

#### Parámetros encode
- `datos` (datoSendencode): Los datos a codificar. Debe ser un objeto con las siguientes propiedades:
  - `secret` (string): El secreto para la codificación.
  - `data` (object): Los datos a codificar.


#### Ejemplo

```javascript
const { encode } = require('code-module64');

const datos = {
  secret: 'soloyo',
  data: {
    information: 'hey bro tengo cosas'
  }
};

encode(datos)
  .then(respuesta => {
    console.log('Datos codificados:', respuesta);
  })
  .catch(error => {
    console.error('Error al codificar los datos:', error);
  });

```
Decodifica los datos proporcionados y los envía a un servidor remoto para su procesamiento.

## Uso

### `decode(datos: DatoSendDecode): Promise<any>`

#### Parámetros decode

- `datos` (datoSendecode): Los datos a decodificar. Debe ser un objeto con las siguientes propiedades:
  - `key` (string): La clave para la decodificación.
  - `text` (string): El texto a decodificar.

```javascript
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
```
  
### Contribución

¡Siéntete libre de contribuir a este proyecto! Si encuentras algún problema, tienes alguna idea de mejora o quieres agregar nuevas características, puedes abrir un issue o enviar un pull request.

### Licencia

Este proyecto está licenciado bajo la Licencia MIT.
