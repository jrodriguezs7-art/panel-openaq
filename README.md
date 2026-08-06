# 🌎 OpenAQ Dashboard

Dashboard web desarrollado con **React + Vite** que consume la API REST de **[OpenAQ](https://docs.openaq.org/)** para explorar, de forma jerárquica, la calidad del aire a nivel mundial: **Ubicaciones → Sensores → Mediciones**.

## 📌 Descripción general

La aplicación permite al usuario navegar por la información pública de OpenAQ en tres niveles:

1. **Ubicaciones**: listado de estaciones/ubicaciones de monitoreo de calidad del aire, con filtro por país (código ISO) y paginación.
2. **Sensores**: al seleccionar una ubicación, se muestran los sensores que pertenecen a ella (parámetro medido, unidad, rango de fechas disponible).
3. **Mediciones**: al seleccionar un sensor, se muestran las mediciones registradas por ese sensor, con filtro por rango de fechas y paginación.

Toda la navegación entre niveles se realiza mediante **rutas dinámicas de React Router DOM**, y toda la comunicación con la API pasa por una **capa de servicios** separada de los componentes visuales.

## ✨ Características principales

- Navegación jerárquica Ubicaciones → Sensores → Mediciones.
- Componentes funcionales de React, comunicados mediante **props**.
- Rutas dinámicas con parámetros (`/locations/:locationId/sensors`, `/locations/:locationId/sensors/:sensorId/measurements`).
- Renderizado de listas mediante `.map()` (tablas de ubicaciones, sensores y mediciones).
- Capa de **servicios** (`src/services/openaqApi.js`) que centraliza todas las llamadas HTTP a OpenAQ.
- **Proxy configurado en `vite.config.js`** hacia `https://api.openaq.org/v3`, que inyecta la cabecera `X-API-Key` desde el servidor de desarrollo, evitando exponer la llave en el navegador.
- Diseño **responsivo** (móvil, tablet y escritorio) con menú lateral colapsable.
- Manejo de estados de carga, error y "sin resultados" en cada vista.

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| [React](https://react.dev/) | Librería principal de UI (componentes funcionales + hooks) |
| [Vite](https://vitejs.dev/) | Bundler y servidor de desarrollo |
| [React Router DOM](https://reactrouter.com/) | Enrutamiento y rutas dinámicas |
| [OpenAQ API v3](https://docs.openaq.org/) | Fuente de datos de calidad del aire |
| CSS3 (Flexbox / Grid / media queries) | Diseño responsivo |

## 📁 Estructura del proyecto

```
openaq-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SummaryCards.jsx
│   │   ├── LocationsTable.jsx
│   │   ├── SensorsTable.jsx
│   │   └── MeasurementsTable.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LocationsPage.jsx
│   │   ├── LocationSensorsPage.jsx
│   │   └── SensorMeasurementsPage.jsx
│   ├── services/
│   │   └── openaqApi.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env.example
├── vite.config.js
├── package.json
└── README.md
```

## ✅ Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (incluido con Node.js)
- Una **API Key gratuita de OpenAQ**, obtenida al registrarte en <https://explore.openaq.org/register>

## 🚀 Instalación y configuración

```bash
# 1. Clonar el repositorio
git clone https://github.com/<tu-usuario>/<tu-repositorio>.git
cd <tu-repositorio>

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita .env y coloca tu API Key:
# OPENAQ_API_KEY=tu_api_key_aqui

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación quedará disponible en `http://localhost:5173`.

> ⚠️ **Importante:** el archivo `.env` no debe subirse al repositorio (ya está incluido en `.gitignore`). La API Key solo es leída por `vite.config.js` en el servidor de desarrollo para inyectarla en el proxy hacia OpenAQ; nunca se expone en el navegador.

## 📜 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la build de producción en `/dist` |
| `npm run preview` | Sirve localmente la build de producción |

## 🧭 Rutas de la aplicación

| Ruta | Página | Descripción |
|---|---|---|
| `/` | `HomePage` | Inicio con resumen general |
| `/locations` | `LocationsPage` | Listado de ubicaciones/estaciones |
| `/locations/:locationId/sensors` | `LocationSensorsPage` | Sensores de la ubicación seleccionada |
| `/locations/:locationId/sensors/:sensorId/measurements` | `SensorMeasurementsPage` | Mediciones del sensor seleccionado |

## 🔒 Sobre el proxy y la API Key

OpenAQ v3 requiere una API Key en la cabecera `X-API-Key` en **todas** las peticiones. Para no exponerla en el cliente, el front-end nunca llama directamente a `api.openaq.org`, sino a rutas relativas `/api/openaq/...`. Estas son interceptadas por el proxy definido en `vite.config.js`, que reenvía la petición a `https://api.openaq.org/v3` agregando la cabecera correspondiente del lado del servidor.

## 📷 Capturas de pantalla

_Agregar aquí las capturas de: página de ubicaciones, sensores de una ubicación, mediciones de un sensor, y las vistas en escritorio y móvil._

## 👤 Autor

- **Nombre:** _Rodriguez Jehiel_
- **Materia / Curso:** _8vo Telemática_
- **Institución:** _UNIVERSIDAD TÉCNICA ESTATAL DE QUEVEDO_

## 📄 Licencia

Proyecto desarrollado con fines académicos. Los datos son provistos por bajo licencia CC BY 4.0.
