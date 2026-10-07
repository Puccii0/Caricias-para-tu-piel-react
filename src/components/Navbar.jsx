import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/hand-soap.png";

function Navbar() {
  return (
    <nav>
      <div className="navbar-logo">
        <img src={logo} alt="Logo para caricias para tu piel" />
        <h2>Caricias para tu piel</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
