import { useState } from "react";

const useEditarEntrada = () => {
    const [isEditable, setEditable] = useState(false);
    const [nombre, setNombre] = useState("Paco");
    const [apellidoPaterno, setApellidoPaterno] = useState("Martínez");
    const [apellidoMaterno, setApellidoMaterno] = useState("Gonzales");
    const [email, setEmail] = useState("paco.martinez@gmail.com");
    const [editarText, setEditarText] = useState("Editar");
    const [rol, setRol] = useState("Almacenista");
  
    const handleSumbit = () => {
      //request a backend
      alert("Enlace clickeado");
      setEditarText("Editar");
      setEditable(!isEditable);
    };
  
    const handleEditable = () => {
      // !isEditable
      if (isEditable) {
        // Qué pasar cuando cancelas
        setEditarText("Editar");
        // volvera tomar los valores de la BDD
      } else {
        // Qué pasar cuando cambias de modo no editar a modo editar
        setEditarText("Cancelar edición");
      }
  
      setEditable(!isEditable);
      // togglear valor del botón editar-cancelar edición
      // prender submit
      // si se cancela edición
      // volver los valores a los que estaban inicialmente
      // apagar submit
    };
   
    return {isEditable, nombre, setNombre, apellidoPaterno, setApellidoPaterno, apellidoMaterno, setApellidoMaterno, email, setEmail, editarText, rol, setRol, handleSumbit, handleEditable }
}

export default useEditarEntrada;