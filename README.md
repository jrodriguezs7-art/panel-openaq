# Panel OpenAQ

Aplicación web desarrollada con React + Vite para visualizar estaciones de monitoreo de calidad del aire de OpenAQ en una región específica de Colombia.

## ¿Qué hace esta app?

- Muestra una lista de estaciones disponibles.
- Presenta resúmenes de datos de calidad del aire.
- Permite consultar la información a través de la API pública de OpenAQ con un proxy configurado en Vite.

## Requisitos previos

Antes de iniciar, asegúrate de tener instalado:

- Node.js 18 o superior
- npm 9 o superior

Puedes verificar la versión con:

```bash
node -v
npm -v
```

## Cómo descargar o clonar el proyecto

Opción 1: clonar desde GitHub

```bash
git clone <url-del-repositorio>
cd panel-openaq
```

Opción 2: descargar como ZIP

1. Descarga el proyecto desde GitHub.
2. Descomprime la carpeta.
3. Abre la carpeta en tu editor de código.
4. En la terminal, entra a la carpeta:

```bash
cd panel-openaq
```

## Instalar dependencias

Dentro de la carpeta del proyecto ejecuta:

```bash
npm install
```

Este comando instalará React, Vite y las demás dependencias necesarias.

## Variables de entorno (opcional)

El proyecto usa la API de OpenAQ a través de un proxy configurado en Vite. Si tienes una API key de OpenAQ, puedes definirla antes de iniciar la app.

### Windows PowerShell

```powershell
$env:OPENAQ_API_KEY="tu_api_key"
```

### Windows CMD

```cmd
set OPENAQ_API_KEY=tu_api_key
```

### Linux/macOS

```bash
export OPENAQ_API_KEY=tu_api_key
```

> Si no tienes API key, la app puede seguir funcionando según la disponibilidad de la API pública, pero la variable se deja preparada para configuraciones adicionales.

## Ejecutar la aplicación en modo desarrollo

```bash
npm run dev
```

Luego abre en tu navegador:

```text
http://localhost:5173
```

## Construir la aplicación para producción

```bash
npm run build
```

El resultado se generará en la carpeta `dist/`.

## Preview de producción

```bash
npm run preview
```

Esto sirve la versión compilada localmente para revisar cómo se verá en producción.

## Scripts disponibles

- `npm run dev` → inicia el servidor de desarrollo.
- `npm run build` → compila la app para producción.
- `npm run preview` → previsualiza la build generada.
- `npm run lint` → revisa el código con Oxlint.

## Estructura general del proyecto

```text
src/
  components/     Componentes de la interfaz
  services/       Lógica para consumir la API de OpenAQ
  App.jsx         Componente principal
  main.jsx        Punto de entrada de React
```

## Solución de problemas

- Si aparece un error de dependencias, vuelve a ejecutar:

```bash
npm install
```

- Si el puerto 5173 ya está en uso, Vite suele mostrar otro puerto disponible.
- Si la API no responde, verifica tu conexión a internet o la disponibilidad del servicio de OpenAQ.

## Autor

Proyecto desarrollado para visualizar información de estaciones de monitoreo ambiental mediante OpenAQ.
