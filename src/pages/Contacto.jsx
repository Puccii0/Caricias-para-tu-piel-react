import useForm from "../hooks/useForm";
import "../styles/contacto.css";

// useForm centraliza el estado y las funciones del formulario de contacto.
function Contacto() {
  const { valores, manejarCambio, limpiarFormulario } = useForm({
    nombre: "",
    email: "",
    asunto: "consulta",
    mensaje: "",
  });

  // Evita el envío tradicional del formulario, muestra los datos y luego lo limpia.
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", valores);
    limpiarFormulario();
  };

  return (
    <main className="contacto">
      <h1>Contacto</h1>
      <p>¿Tenés alguna consulta? Ponete en contacto con nosotros.</p>

      <form onSubmit={manejarEnvio}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={valores.nombre}
          onChange={manejarCambio}
          required
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo electrónico"
          value={valores.email}
          onChange={manejarCambio}
          required
        />

        <label htmlFor="asunto">Asunto:</label>
        <select
          name="asunto"
          id="asunto"
          value={valores.asunto}
          onChange={manejarCambio}
        >
          <option value="consulta">Consulta general</option>
          <option value="stock">Consulta de stock</option>
          <option value="pedido">Realizar un pedido</option>
        </select>

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje"
          value={valores.mensaje}
          onChange={manejarCambio}
          required
        ></textarea>

        <div className="botonform">
          <button type="submit">Enviar</button>

          <button
            type="button"
            onClick={limpiarFormulario}
            className="borrarbutton"
          >
            Limpiar
          </button>
        </div>
      </form>
    </main>
  );
}

export default Contacto;
