import { Link } from "react-router-dom";
import jabon from '../assets/jabon1.jpg';
import '../styles/inicio.css';


function Inicio() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Caricias para tu piel</h1>
 
          <p>Bienvenido a nuestra tienda de jabones artesanales.

          </p>

          <Link to="/productos">Ver productos</Link>
        </div>

        <div className="hero-image">
          <img
            src={jabon}
            alt="Jabón artesanal" />
        </div>
      </section>
    </main>
  )
}

export default Inicio