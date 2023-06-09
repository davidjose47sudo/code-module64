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
    const response = await axios.post("https://code64.onrender.com/api/encode", datos);
    const respuesta = response.data;
    return respuesta;
  } catch (error) {
    throw new Error('Error al enviar la petición POST');
  }
}

export async function decode(datos: DatoSendDecode) {
  try {
    const response = await axios.post("https://code64.onrender.com/api/decode", datos);
    const respuesta = response.data;
    if (typeof respuesta === "object") {
      return respuesta;
    }
    return "error";
  } catch (error) {
    throw new Error('Error al enviar la petición POST');
  }
}