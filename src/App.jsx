import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Layout from './components/Layout.jsx'
import './styles/global.css'



function App() {
  return (
    <BrowserRouter>

      <Routes >
        <Route element={<Layout />}> 
          <Route path="/" element={<Inicio />}  />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>

      
    </BrowserRouter>
  )
}

export default App