import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">UTEQ</span>
        <div>
          <h2>Universidad Tecnica Estatal de Quevedo</h2>
          <p>Web - Estación de Monitoreo Ambiental</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        <NavLink className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")} to="/">
          Inicio
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")} to="/locations">
          Estaciones
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")} to="/summary">
          Tarjetas
        </NavLink>
      </nav>

      <div className="sidebar-footer"> 
        <p style={{ fontFamily: 'Times New Roman', fontStyle: 'italic' }}
        > Aplicaciones Telemáticas Basadas en la Web</p>
        <small style={{ fontFamily: 'Times New Roman', fontStyle: 'italic' }}>
          UTEQ</small>
      </div>
    </aside>
  );
}

export default Sidebar;