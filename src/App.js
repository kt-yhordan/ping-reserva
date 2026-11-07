import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import CardMesa from "./components/CardMesa";
import ModalReserva from "./components/ModalReserva";

function App() {
  const [pagina, setPagina] = useState("inicio");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [personas, setPersonas] = useState(2);
  const [hora, setHora] = useState("19:00");
  const [fecha, setFecha] = useState("");

  const [mesasNormales, setMesasNormales] = useState([
    { id: 1, nombre: "MESA 1", personas: 4, imagen: "/img/mesa.png", vip: false, estado: "disponible" },
    { id: 2, nombre: "MESA 2", personas: 4, imagen: "/img/mesa.png", vip: false, estado: "disponible" },
    { id: 3, nombre: "MESA 3", personas: 4, imagen: "/img/mesa.png", vip: false, estado: "ocupada" },
    { id: 4, nombre: "MESA 4", personas: 4, imagen: "/img/mesa.png", vip: false, estado: "disponible" },
  ]);

  const [mesasVip, setMesasVip] = useState([
    { id: 5, nombre: "MESA VIP 1", personas: 4, imagen: "/img/mesa.png", vip: true, estado: "disponible" },
    { id: 6, nombre: "MESA VIP 2", personas: 4, imagen: "/img/mesa.png", vip: true, estado: "reservada" },
    { id: 7, nombre: "MESA VIP 3", personas: 4, imagen: "/img/mesa.png", vip: true, estado: "disponible" },
    { id: 8, nombre: "MESA VIP 4", personas: 4, imagen: "/img/mesa.png", vip: true, estado: "disponible" },
  ]);

  const mesas = pagina === "vip" ? mesasVip : mesasNormales;

  function cambiarPagina(nueva) {
    setPagina(nueva);
  }

  function abrirModal() {
    setMostrarModal(true);
  }

  function cerrarModal() {
    setMostrarModal(false);
  }

  function buscarMesas() {
    setMostrarModal(false);
  }

  function reservarMesa(mesa) {
    if (pagina === "vip") {
      const nuevas = mesasVip.map((m) =>
        m.id === mesa.id ? { ...m, estado: "reservada" } : m
      );
      setMesasVip(nuevas);
    } else {
      const nuevas = mesasNormales.map((m) =>
        m.id === mesa.id ? { ...m, estado: "reservada" } : m
      );
      setMesasNormales(nuevas);
    }
    setPagina("exito-reserva");
  }

  function enviarFormulario(e) {
    e.preventDefault();
    setPagina("exito-envio");
  }

  return (
    <div className="app">
      {pagina !== "exito-reserva" && pagina !== "exito-envio" && (
        <Sidebar pagina={pagina} cambiarPagina={cambiarPagina} />
      )}

      <div className="contenido">
        {(pagina === "inicio" || pagina === "vip") && (
          <>
            <div className="barra-buscar">
              <input
                type="text"
                placeholder="¿Cuándo y para cuántos?"
                onClick={abrirModal}
                readOnly
              />
            </div>

            <div className="titulo-seccion">
              <h2>
                Mesas <span>{pagina === "vip" ? "VIP" : "disponibles"}</span>
              </h2>
              <p>Selecciona la mesa que mas te guste para continuar</p>
            </div>

            <div className="grid-mesas">
              {mesas.map((mesa) => (
                <CardMesa key={mesa.id} mesa={mesa} onReservar={reservarMesa} />
              ))}
            </div>

            {pagina === "vip" && (
              <p className="nota-vip">
                Capacidades referenciales. Capacidad y disponibilidad por confirmar al reservar.
              </p>
            )}
          </>
        )}

        {pagina === "chifa" && (
          <div className="pagina-chifa">
            <h2>El Chifa</h2>
            <p className="subtitulo">Conoce Ping Chung Long</p>

            <div className="caja-chifa">
              <img src="/img/chifa.png" alt="Ping Chung Long" />
              <div>
                <h3>Ping Chung Long</h3>
                <p>Una mesa para compartir comida chifa y disfrutar juntos.</p>
              </div>
            </div>

            <div className="texto-chifa">
              <h3>Nosotros</h3>
              <p>
                En Ping Chung Long, la comida chifa es una ocasión para reunirse.
                Comparte la mesa con tu familia o amigos y disfruta de un momento juntos.
              </p>

              <h3>Elige cómo compartir</h3>
              <p>
                Explora las mesas de Inicio o la pestaña Mesas VIP. Elige una opción para
                continuar con tu reserva.
              </p>
            </div>

            <button className="btn-reservar-grande" onClick={() => setPagina("inicio")}>
              RESERVAR
            </button>
          </div>
        )}

        {pagina === "encuentranos" && (
          <div className="pagina-encuentranos">
            <h2>¡ENCUENTRANOS!</h2>
            <p className="subtitulo">visitanos y encuentra la mejor ruta</p>

            <div className="info-lugar">
              <h3>Direccion</h3>
              <p>Av principal lima 123<br />Santiago de surco</p>

              <h3>Horario de Atencion</h3>
              <p>De lunes a Domingo<br />12am - 10:45pm</p>
            </div>

            <button className="btn-ruta">Encuentra la mejor ruta</button>

            <img className="mapa" src="/img/mapa.png" alt="Mapa" />
          </div>
        )}

        {pagina === "contacto" && (
          <div className="pagina-contacto">
            <h2>Contáctanos</h2>
            <p className="subtitulo">Escribenos tus dudas o consultas</p>

            <div className="contacto-grid">
              <div className="contacto-izq">
                <h3>Hablemos</h3>
                <p>Telefono<br />Por confirmar</p>
                <p>WhatsApp<br />Por confirmar</p>
                <p>Correo electrónico<br />Por confirmar</p>

                <h3 style={{ marginTop: "25px" }}>Redes sociales</h3>
                <p>Facebook<br />Por confirmar</p>
                <p>Instagram<br />Por confirmar</p>
                <p className="rojo">Los datos y perfiles oficiales están pendientes de confirmación.</p>
              </div>

              <div className="contacto-der">
                <h3>Envíanos un mensaje</h3>
                <form onSubmit={enviarFormulario}>
                  <input type="text" placeholder="Tu nombre" required />
                  <input type="email" placeholder="Tu correo electrónico" required />
                  <input type="text" placeholder="¿Sobre qué quieres consultar?" />
                  <textarea placeholder="Escribe tu consulta" required></textarea>
                  <button type="submit" className="btn-enviar">enviar</button>
                </form>
                <p className="nota-form">Formulario de muestra. El envío de consultas aún no está habilitado.</p>
              </div>
            </div>
          </div>
        )}

        {pagina === "admin" && (
          <div className="pagina-admin">
            <h2>Panel de Administrador</h2>
            <p className="subtitulo">Gestion de reservas y ocupacion</p>

            <h3 style={{ marginTop: "30px", color: "#c9a86c" }}>Reservas del dia</h3>

            <div className="lista-reservas">
              <div className="item-reserva">
                <span>Mesa 1</span>
                <span>19:00</span>
                <span className="estado-reserva">Confirmada</span>
              </div>
              <div className="item-reserva">
                <span>Mesa VIP 2</span>
                <span>20:00</span>
                <span className="estado-reserva">Confirmada</span>
              </div>
              <div className="item-reserva">
                <span>Mesa 3</span>
                <span>13:00</span>
                <span className="estado-reserva ocupada">Ocupada</span>
              </div>
              <div className="item-reserva">
                <span>Mesa 4</span>
                <span>21:00</span>
                <span className="estado-reserva">Confirmada</span>
              </div>
            </div>

            <h3 style={{ marginTop: "40px", color: "#c9a86c" }}>Calendario de ocupacion</h3>

            <div className="calendario">
              <div className="dia">
                <div className="nombre-dia">Lun</div>
                <div className="hora ocupada">13:00</div>
                <div className="hora">14:00</div>
                <div className="hora ocupada">19:00</div>
                <div className="hora">20:00</div>
              </div>
              <div className="dia">
                <div className="nombre-dia">Mar</div>
                <div className="hora">13:00</div>
                <div className="hora ocupada">14:00</div>
                <div className="hora">19:00</div>
                <div className="hora ocupada">20:00</div>
              </div>
              <div className="dia">
                <div className="nombre-dia">Mie</div>
                <div className="hora">13:00</div>
                <div className="hora">14:00</div>
                <div className="hora ocupada">19:00</div>
                <div className="hora">20:00</div>
              </div>
              <div className="dia">
                <div className="nombre-dia">Jue</div>
                <div className="hora ocupada">13:00</div>
                <div className="hora">14:00</div>
                <div className="hora">19:00</div>
                <div className="hora">20:00</div>
              </div>
              <div className="dia">
                <div className="nombre-dia">Vie</div>
                <div className="hora">13:00</div>
                <div className="hora ocupada">14:00</div>
                <div className="hora ocupada">19:00</div>
                <div className="hora ocupada">20:00</div>
              </div>
            </div>

            <p style={{ marginTop: "20px", fontSize: "13px", color: "#888" }}>
              Los horarios en color indican mesas ocupadas o reservadas.
            </p>
          </div>
        )}

        {pagina === "exito-reserva" && (
          <div className="pagina-exito">
            <h2>Reserva exitosa</h2>
            <button onClick={() => setPagina("inicio")}>Volver</button>
            <img src="/img/mapa.png" alt="Mapa" />
          </div>
        )}

        {pagina === "exito-envio" && (
          <div className="pagina-exito">
            <h2>Envio Exitoso</h2>
            <button onClick={() => setPagina("contacto")}>Volver</button>
            <div className="caja-exito-chifa">
              <img src="/img/chifa.png" alt="Ping Chung Long" />
              <div>
                <h3>Ping Chung Long</h3>
                <p>Una mesa para compartir comida chifa y disfrutar juntos.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <ModalReserva
        abierto={mostrarModal}
        cerrar={cerrarModal}
        personas={personas}
        setPersonas={setPersonas}
        hora={hora}
        setHora={setHora}
        fecha={fecha}
        setFecha={setFecha}
        buscar={buscarMesas}
      />
    </div>
  );
}

export default App;