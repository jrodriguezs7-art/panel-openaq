import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { obtenerEstaciones } from "./services/openaqApi";
import "./App.css";
import Homepage from "./pages/Homepage";
import LocationsPage from "./pages/LocationsPage";
import SummaryCardsPage from "./pages/SummaryCardsPage";

function App() {
  const [estaciones, setEstaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  async function cargarEstaciones() {
    try {
      setCargando(true);
      setError("");

      const resultados = await obtenerEstaciones();

      setEstaciones(resultados);
    } catch (errorPeticion) {
      setError(errorPeticion.message);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarEstaciones();
  }, []);

  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-container">
        <Header />

        <main className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  estaciones={estaciones}
                  cargando={cargando}
                  error={error}
                />
              }
            />

            <Route
              path="/locations"
              element={
                <LocationsPage
                  estaciones={estaciones}
                  cargando={cargando}
                  error={error}
                  cargarEstaciones={cargarEstaciones}
                />
              }
            />

            <Route
              path="/summary"
              element={
                <SummaryCardsPage
                  estaciones={estaciones}
                  cargando={cargando}
                  error={error}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;