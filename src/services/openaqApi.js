const API_URL = "/api/openaq/v3";

export async function obtenerEstaciones() {
  const bbox =
    "-83.807137,-5.145582,-74.343768,1.776830";

  const respuesta = await fetch(
    `${API_URL}/locations?bbox=${bbox}&limit=100&page=1`
  );

  if (!respuesta.ok) {
    const detalle = await respuesta.text();

    throw new Error(
      `OpenAQ respondió ${respuesta.status}: ${detalle}`
    );
  }

  const datos = await respuesta.json();
  return datos.results ?? [];
}