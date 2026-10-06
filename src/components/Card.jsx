import '../styles/card.css'


function Card(props) {
    return (
            <div className="card">
                <img src={props.image} alt={props.title} />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p className="price">{props.price}</p>
            </div>
    )
}

export default Card