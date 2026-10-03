import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App