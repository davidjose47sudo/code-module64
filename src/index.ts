export interface datoSendencode {
  secret: string,
  data: {
    information: string
  }
}
export interface datoSendecode {
  text: string
  key: string,
}

export async function encode(datos: datoSendencode) {
  console.log(datos)
  const response = await fetch("http://localhost:3000/api/encode", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  });

  if (!response.ok) {
    throw new Error('Error al enviar la petición POST');
  }

  // Aquí puedes manejar la respuesta de la petición
  const respuesta = await response.json();
  console.log(respuesta);
  return respuesta
}

export async function decode(datos: datoSendecode) {
  const response = await fetch("http://localhost:3000/api/decode/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  });

  if (!response.ok) {
    throw new Error('Error al enviar la petición POST');
  }

  // Aquí puedes manejar la respuesta de la petición
  const respuesta = await response.json();
  console.log(respuesta.information.information);
  console.log(respuesta.information.secret);
  return {
    "information": respuesta.information.information,
    "secret": respuesta.information.secret
  }
}
