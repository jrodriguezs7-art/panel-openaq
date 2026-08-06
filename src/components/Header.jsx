function Header() {
  return (
    <header className="header">
      <div>
        <h1>Panel de calidad del aire</h1>
        <p>Información obtenida de la API-OpenAQ</p>
      </div>

      <div className="user">
        <div className="user-avatar">RJ</div>

        <div>
          <strong>Usuario</strong>
          <span>Rodriguez Jehiel</span>
        </div>
      </div>
    </header>
  );
}

export default Header;