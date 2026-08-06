const API_URL = "/api/openaq/v3";

export async function obtenerEstaciones() {
  const bbox =
    "-83.80713775878478,-5.145582243618086,-74.34376817756562,1.776830555686696";

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