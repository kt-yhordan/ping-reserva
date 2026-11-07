function ModalReserva({ abierto, cerrar, personas, setPersonas, hora, setHora, fecha, setFecha, buscar }) {
  if (!abierto) return null;

  const horarios = ["12:00", "13:00", "14:00", "19:00", "20:00", "21:00"];

  return (
    <div className="modal-fondo" onClick={cerrar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>¿Cuándo y para cuántos?</h3>

        <div className="modal-fila">
          <div className="modal-campo">
            <label>Fecha</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="modal-campo">
            <label>Personas</label>
            <div className="contador">
              <button onClick={() => setPersonas(Math.max(1, personas - 1))}>-</button>
              <span>{personas}</span>
              <button onClick={() => setPersonas(Math.min(8, personas + 1))}>+</button>
            </div>
            <small style={{ fontSize: "11px", color: "#888" }}>Máximo 8 personas</small>
          </div>
        </div>

        <div className="modal-campo">
          <label>Horario</label>
          <div className="horarios">
            {horarios.map((h) => (
              <button
                key={h}
                className={hora === h ? "seleccionado" : ""}
                onClick={() => setHora(h)}
              >
                {h}
              </button>
            ))}
          </div>
        </div>

        <div className="modal-botones">
          <button className="btn-cancelar" onClick={cerrar}>
            Cancelar
          </button>
          <button className="btn-buscar" onClick={buscar}>
            Buscar mesas disponibles
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalReserva;