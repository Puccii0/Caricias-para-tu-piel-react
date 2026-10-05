import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import './styles/global.css'
import './styles/footer.css'


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer>

      </Footer>
    </BrowserRouter>
  )
}

export default App