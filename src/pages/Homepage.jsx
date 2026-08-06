import SummaryCards from "../components/SummaryCards";
import StationsTable from "../components/StationsTable";

function Homepage({ estaciones, cargando, error }) {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Ventana Principal</p>
          <h2>Monitoreo Ambiental en Tiempo Real (24/7) ⏳</h2>
          <p>
            Explora el estado de los sensores en las estaciones registradas y revisa los
            indicadores clave del sistema OpenAQ.
          </p>
        </div>
        <div className="hero-badge"> Total de Estaciones Activas = {estaciones.length} ✅ </div>
      </section>

      <SummaryCards estaciones={estaciones} />

      {cargando && (
        <div className="message loading">Consultando información de OpenAQ...</div>
      )}

      {error && (
        <div className="message error">
          <strong>Error:</strong> {error}
        </div>
      )}

      {!cargando && !error && estaciones.length === 0 && (
        <div className="message empty">No se encontraron estaciones.</div>
      )}

      {!cargando && !error && estaciones.length > 0 && (
        <section>
          <div className="section-heading">
            <div>
              <h2>Información de las Estaciones 📋</h2>
              <p>Vista Previa de las Estaciones Registradas/Activas.</p>
            </div>
          </div>
          <StationsTable estaciones={estaciones} />
        </section>
      )}
    </div>
  );
}

export default Homepage;
