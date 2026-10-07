import {useState} from 'react';

function useForm(initialValues) {
  const [valores, setValores] = useState(initialValues)

  const manejarCambio = (e) => {
    const { name, value } = e.target
    console.log('Manejando cambio en el campo:', name, 'con valor:', value)
    setValores({ ...valores, [name]: value })
    }

const limpiarFormulario = () => {
    setValores(initialValues)
  }

  return { valores, manejarCambio, limpiarFormulario }
}

export default useForm