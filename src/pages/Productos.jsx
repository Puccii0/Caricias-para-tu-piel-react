import Carbon from '../assets/Carbon.png'
import Hellokitty from '../assets/Hellokitty.png'
import Corazon from '../assets/Corazonjabon.png'
import Sirenita from '../assets/Sirenitajabon.png'
import Card from '../components/Card.jsx'



function Productos() {

 const jabones = [
        {
        title: 'Jabón de Carbón Activado', 
        description: 'Un jabón exfoliante que elimina impurezas y deja tu piel suave y limpia.',
        price: '4000$',
        image: Carbon
        },
        {
        title: 'Jabón de Hello Kitty',
        description: 'Un jabón con aroma dulce y suave, ideal para los amantes de Hello Kitty.',
        price: '3500$',    
        image: Hellokitty
        },
        {
        title: 'Jabón en Forma de Corazón',
        description: 'Un jabón con forma de corazón, perfecto para regalar o consentirte a ti mismo.',
        price: '3000$',
        image: Corazon
        },
        {
        title: 'Jabón de Sirenita',
        description: 'Un jabón con aroma a mar y un diseño encantador inspirado en las sirenas.',
        price: '3500$',
        image: Sirenita
        },
        
    ]

  return (
    <main>
      <h1>Nuestros Jabones</h1>
      <p>Conocé nuestros jabones artesanales.</p>
      <div className="card-container">
        {jabones.map((jabon) => (
          <Card 
            key={jabon.title}
            title={jabon.title}
            description={jabon.description}
            price={jabon.price}
            image={jabon.image}
          />
        ))}
      </div>
    </main>


  )
 
}


export default Productos