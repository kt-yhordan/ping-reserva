function Sidebar({ pagina, cambiarPagina }) {
  return (
    <div className="sidebar">
      <div className="logo" onClick={() => cambiarPagina("inicio")} style={{ cursor: "pointer" }}>
        Ping
        <span>Reserva</span>
      </div>

      <div className="menu">
        <button
          className={pagina === "vip" ? "activo" : ""}
          onClick={() => cambiarPagina("vip")}
        >
          Mesas VIP
        </button>
        <button
          className={pagina === "chifa" ? "activo" : ""}
          onClick={() => cambiarPagina("chifa")}
        >
          El Chifa
        </button>
        <button
          className={pagina === "encuentranos" ? "activo" : ""}
          onClick={() => cambiarPagina("encuentranos")}
        >
          Encuentranos
        </button>
        <button
          className={pagina === "contacto" ? "activo" : ""}
          onClick={() => cambiarPagina("contacto")}
        >
          Contactanos
        </button>
        <button
          className={pagina === "admin" ? "activo" : ""}
          onClick={() => cambiarPagina("admin")}
        >
          Administrador
        </button>
      </div>

      <div className="frase">
        Tu mesa ya esta<br />esperando
      </div>
    </div>
  );
}

export default Sidebar;