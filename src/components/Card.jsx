import { Link } from "react-router-dom";
import "../styles/card.css";

// Recibe los datos de un producto por props y los muestra en una tarjeta.
function Card(props) {
  return (
    <div className={`card ${props.extraClass || ""}`}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p className="price">{props.price}</p>

      <Link to="/contacto" className="boton-stock">
        Consultar stock
      </Link>
    </div>
  );
}

export default Card;
