import {Link} from "react-router-dom";

function navbar() {
    return (
        <nav>
            <h2>Caricias para tu piel</h2>
            <ul>
                <li>
                <Link to="/">Inicio</Link>
                </li>
                <li>
                <Link to="/Productos">Productos</Link>
                </li>
                <li>
                <Link to="/Contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}

export default navbar;

