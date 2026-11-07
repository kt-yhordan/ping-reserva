function CardMesa({ mesa, onReservar }) {
  let textoEstado = "DISPONIBLE";
  let claseEstado = "estado";

  if (mesa.estado === "ocupada") {
    textoEstado = "OCUPADA";
    claseEstado = "estado ocupada";
  } else if (mesa.estado === "reservada") {
    textoEstado = "RESERVADA";
    claseEstado = "estado reservada";
  } else if (mesa.vip) {
    textoEstado = "VIP";
    claseEstado = "estado vip";
  }

  return (
    <div className="card-mesa">
      <img src={mesa.imagen} alt={mesa.nombre} />
      <div className="info">
        <div className="nombre">
          {mesa.nombre}
        </div>
        <span className={claseEstado}>
          {textoEstado}
        </span>
      </div>
      <div className="capacidad">
        {mesa.personas} PERSONAS
      </div>
      {mesa.estado === "disponible" ? (
        <button onClick={() => onReservar(mesa)}>
          RESERVAR
        </button>
      ) : (
        <button disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
          NO DISPONIBLE
        </button>
      )}
    </div>
  );
}

export default CardMesa;