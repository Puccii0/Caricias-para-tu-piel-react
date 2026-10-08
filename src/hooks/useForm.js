import { useState } from "react";

// Hook personalizado para manejar los valores y cambios de un formulario.
// Recibe los valores iniciales y devuelve los valores actuales,
// una función para manejar cambios y otra para limpiar el formulario.

function useForm(initialValues) {
  const [valores, setValores] = useState(initialValues);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    console.log("Manejando cambio en el campo:", name, "con valor:", value);
    setValores({ ...valores, [name]: value });
  };

  const limpiarFormulario = () => {
    setValores(initialValues);
  };

  return { valores, manejarCambio, limpiarFormulario };
}

export default useForm;
