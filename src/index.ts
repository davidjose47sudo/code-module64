import axios from 'axios';

export interface DatoSendEncode {
  secret: string;
  data: {
    information: string;
  };
}

export interface DatoSendDecode {
  text: string;
  key: string;
}

export async function encode(datos: DatoSendEncode) {
  console.log(datos);

  try {
    const response = await axios.post("http://localhost:3000/api/encode", datos);
    const respuesta = response.data;
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    throw new Error('Error al enviar la petición POST');
  }
}

export async function decode(datos: DatoSendDecode) {
  try {
    const response = await axios.post("http://localhost:3000/api/decode", datos);
    const respuesta = response.data;
    if (typeof respuesta === "object") {
      console.log(respuesta);
      return respuesta;
    }
    return "error";
  } catch (error) {
    throw new Error('Error al enviar la petición POST');
  }
}