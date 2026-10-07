import "../styles/card.css";

// Recibe los datos de un producto por props y los muestra en una tarjeta.
function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p className="price">{props.price}</p>
    </div>
  );
}

export default Card;
