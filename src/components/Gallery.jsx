import "../styles/gallery.css";


// Recibe por props el arreglo de imágenes y las muestra en una galería.
function Gallery(props) {
  return (
    <div className="gallery">
      {props.items.map((item) => (
        <div key={item.title} className="gallery-item">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
