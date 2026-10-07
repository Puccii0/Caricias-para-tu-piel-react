import { Link } from "react-router-dom";
import jabon from "../assets/jabon1.jpg";
import "../styles/inicio.css";

/* importe de imagenes de la galeria y la creacion de un array de objetos para la galeria */
import Gallery from "../components/Gallery.jsx";
import gallery3 from "../assets/jabon3.jpg";
import gallery6 from "../assets/jabon6.jpg";
import gallery from "../assets/jabon.jpg";
import gallery8 from "../assets/jabon8.jpg";
import gallery7 from "../assets/jabon7.jpg";

const galeria = [
  {
    title: "Jabón de rosas",
    image: gallery3,
  },
  {
    title: "Jabón de rosa mosqueta",
    image: gallery6,
  },
  {
    title: "Uso del jabon en la piel",
    image: gallery,
  },
  {
    title: "Preparacion de jabones",
    image: gallery8,
  },
  {
    title: "Jabón de Lavanda",
    image: gallery7,
  },
];

function Inicio() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Caricias para tu piel</h1>

          <p>Bienvenido a nuestra tienda de jabones artesanales.</p>

          <Link to="/productos">Ver productos</Link>
        </div>

        <div className="hero-image">
          <img src={jabon} alt="Jabón artesanal" />
        </div>
      </section>

      <Gallery items={galeria} />
    </main>
  );
}

export default Inicio;
